//
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Breadcrumbs.module.css';

const convertBreadcrumb = (string: string) =>
{
    return string
        .replace(/-/g, ' ')
        .replace(/oe/g, 'ö')
        .replace(/ae/g, 'ä')
        .replace(/ue/g, 'ü')
        .replace(/\.html$/, '')
};

const Breadcrumbs = () =>
{
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState([] as any);

    useEffect(() =>
    {
        if (router) {
            const linkPath = router.asPath.split('/');
            linkPath.shift();

            const pathArray = linkPath.map((path, i) =>
            {
                return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
            });

            setBreadcrumbs(pathArray);
        }
    }, [router]);

    if (!breadcrumbs) {
        return null;
    }

    return (
        <nav aria-label="breadcrumbs">
            <ol className={styles.list}>
                <li className={styles.item}>
                    <Link className={styles.link} href="/">Home</Link>
                </li>
                {breadcrumbs.map((breadcrumb: { href: string; breadcrumb: any; }, i: any) =>
                {
                    return (
                        <li key={breadcrumb.href} className={styles.item}>
                            <Link className={styles.link} href={breadcrumb.href}>
                                {convertBreadcrumb(breadcrumb.breadcrumb)}
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;