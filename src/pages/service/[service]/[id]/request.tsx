import { Axios, AxiosError } from "axios";
import type { GetServerSidePropsContext, NextPage } from "next";
import { useState } from "react";
import FormBookingComponent from "../../../../modules/booking/components/FormBooking/FormBooking.component";
import FooterComponent from "../../../../modules/comon/components/Footer/Footer.component";
import HeaderComponent from "../../../../modules/comon/components/Header/Header.component";
import {
  getServiceApi,
  IServiceDetail,
} from "../../../../modules/comon/services/service-api-gen";
import { ValidApis } from "../../../../modules/comon/services/services-api-gen";
import { IServiceApiName } from "../../../../modules/comon/services/IServiceApiName";
import { RequestApi, ServicesInfoApi } from "../../../../rosha-api/api";
import { IServicesInfoListResponseDataItemModel } from "../../../../rosha-api/IServicesInfoListResponseDataItemModel";
import { BASE_PATH } from "../../../../rosha-api/base";

import globalAxios from "axios";

const ServiceRequest = ({
  service,
  name,
  serviceInfo,
}: {
  service: IServiceDetail;
  name: string;
  serviceInfo: null | IServicesInfoListResponseDataItemModel;
}) => {
  const [status, setStatus] = useState<"fail" | "success" | null>(null);
  const submit = (data: any) => {
    const requestApi = new RequestApi();
    const requestData = {
      service: { title: service.title, service: name, serviceId: service.id },
      ...data,
    };
    requestApi
      .postRequests({
        iRequestRequestModel: {
          data: { GeneralRequests: { Identifiers: requestData } },
        },
      })
      .then((val) => {
        debugger;
        if (val.status === 200) {
          if (val.data.data?.id) {
            submitImages(val.data.data?.id);
          } else {
            setStatus("success");
          }
        } else {
          setStatus("fail");
        }
      })
      .catch((e) => {
        setStatus("fail");
      });
  };

  const submitImages = (id: number) => {
    const form = document.querySelector<HTMLFormElement>("#request-form");
    if (!form) return;
    const data: any = {};
    const formData = new FormData();

    const elements = Array.from(form.elements) as HTMLInputElement[];
    elements.forEach(({ name, type, value, files, ...element }) => {
      if (!["submit", "file"].includes(type)) {
        data[name] = value;
      } else if (type === "file") {
        Array.from(files || []).forEach((file: any) => {
          formData.append(`files`, file, file.name);
        });
      }
    });
    formData.append(`ref`, "api::request.request");
    formData.append(`refId`, `${id}`);
    formData.append(`field`, "Attachments");

    globalAxios
      .post(`${BASE_PATH}/upload`, formData)
      .then((val) => {
        setStatus("success");
      })
      .catch((e) => {
        setStatus("fail");
      });
  };
  return (
    <>
      <HeaderComponent />
      <main id="rlr-main" className="rlr-main--fixed-top">
        <div className="rlr-section__content--md-top">
          <div className="rlr-section rlr-section__my">
            <div className="rlr-checkout">
              <article
                id="post-7"
                className="post-7 page type-page status-publish hentry"
              >
                <div className="container-xxl">
                  <div className="entry-content">
                    <FormBookingComponent
                      onSubmit={submit}
                      status={status}
                      service={service as string}
                      serviceInfo={serviceInfo}
                    />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
      <FooterComponent />
    </>
  );
};

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const service = params?.service as IServiceApiName;
  const id = params?.id;
  console.log({
    service,
    id,
  });

  let item: IServiceDetail | null = {};
  if (!id?.length || !service?.length || !ValidApis.includes(service)) {
    return {
      notFound: true,
      props: { service: item, name: service },
    };
  }

  let infoQueryString = `filters[Service][$eq]=${service}`;

  try {
    const servicesInfoApi = new ServicesInfoApi();

    const foundedInfo = await servicesInfoApi
      .getServicesInfos({}, { params: infoQueryString })
      .then((res) => (res.data?.data?.length ? res.data.data[0] : null));
    item = await getServiceApi(service, +id);

    return {
      props: { service: item, name: service, serviceInfo: foundedInfo },
    };
  } catch (e: any) {
    if (e instanceof AxiosError) {
      if (e.response?.status === 404)
        return {
          notFound: true,
          props: { service: item, name: service },
        };
    }
  }
};

export default ServiceRequest;
