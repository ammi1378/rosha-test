import { IServiceFilter, IServiceFilters } from "./SouvenirsServiceFilter.props";

import { useRouter } from "next/router";
import QueryString from "qs";
import React, { useEffect, useState } from "react";
import { IServiceFilterProps } from "../../common/IServiceFilterProps";

const SouvenirsServiceFilterComponent: React.FC<IServiceFilterProps> = ({
    className,
    service,
    serviceInfo,
}) => {

    const [servicesFilters, setServicesFilters] = useState<IServiceFilters>({
        filters: {
            cityFilter: {
                field: "Name",
                type: "city",
                value: "",
            }
        },
        query: ""
    });
    const serviceFilterChange = (filter: IServiceFilter, value: any) => {
        const localServicesFilters = { ...servicesFilters };
        if (
            filter.type === "city" &&
            localServicesFilters.filters.cityFilter
        ) {
            localServicesFilters.filters.cityFilter.value = value;
        }
        setServicesFilters(localServicesFilters);
    };

    return (
        <div className="row mt-3">
            <div className="col-xl-10">
                <label className="rlr-form-label rlr-form-label--dark">City</label>
                <select id="rlr-product-form-product-sub-category"
                    className="form-select rlr-form-select"
                    onChange={(e) =>
                        serviceFilterChange(
                            servicesFilters.filters.cityFilter!,
                            e.target.value
                        )
                    }
                >
                    <option value="0" disabled selected>Select</option>
                    <option value="1">Tehran</option>
                    <option value="2">Kish</option>
                    <option value="3">Mashhad</option>
                    <option value="3">Esfehan</option>
                    <option value="4">Gheshm</option>
                </select>
            </div>
        </div>
    );
};

export default SouvenirsServiceFilterComponent;
