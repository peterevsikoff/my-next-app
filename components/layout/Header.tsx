'use client';

import { PAGES, ROLES } from '@/types/enums';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import "./header.scss";
import clsx from 'clsx';
import { Burger } from '@components';


const Header = () => {
    const pathname = usePathname();
    const [show, setShow] = useState(false);

    const navConfig = [
        { id: "", roles: [undefined, ROLES.USER, ROLES.PRO, ROLES.ADMIN], name: "Главная" },
        { id: PAGES.TESTS, roles: [undefined, ROLES.USER, ROLES.PRO, ROLES.ADMIN], name: "Тесты" },
        { id: PAGES.ABOUT, roles: [undefined, ROLES.USER, ROLES.PRO, ROLES.ADMIN], name: "О нас" },
        { id: PAGES.USERS, roles: [ROLES.ADMIN], name: "Пользователи" },
    ];

    const user = {role: ROLES.ADMIN};

    return (
        <header className={clsx("header", {"header-active": show})}>
            <div className="container">
                <div className="section-tile">
                    <div className="header-wrap">
                        <div className="logo">
                            {/* <Slogan/> */}
                        </div>
                        <div className={clsx("header-right-side", {"nav-active": show})} onClick={() => {if(show) setShow(false)}}>
                            <nav className="navigation">
                                {
                                    navConfig.map(({id, name, roles}) => {
                                        const path = `/${id}`;
                                        return(roles.includes(user?.role) &&
                                            <Link key={id} id={id} href={path} className={clsx({"a-active": pathname === path})}>{name}</Link>)
                                    })
                                }
                            </nav>
                            {/* <User/> */}
                        </div>
                        <button className={clsx("btn-burger", {"btn-burger-active": show})} onClick={() => setShow(!show)}>
                            <Burger/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export { Header };