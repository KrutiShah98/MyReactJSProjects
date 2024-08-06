import React from 'react'
import AdminCom from './AdminCom';
import SupplierCom from './SupplierCom';
import CustomerCom from './CustomerCom';

export default function SwitchCase6() {
    const userrole = "Supplier";

    switch (userrole) {
        case "Admin":
            return <AdminCom/>;

        case "Supplier":
            return <SupplierCom/>;

        case " Customer":
            return <CustomerCom/>;
    }
}
