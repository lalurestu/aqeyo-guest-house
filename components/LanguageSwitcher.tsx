'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { ChangeEvent, useState, useTransition } from 'react';

export default function LanguageSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const pathname = usePathname();
    const localActive = useLocale();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <label className="border-2 rounded">
            <p className="sr-only">Change language</p>
            <select
                defaultValue={localActive}
                className="bg-transparent py-2 px-4 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                onChange={onSelectChange}
                disabled={isPending}
            >
                <option value="en">🇺🇸 EN</option>
                <option value="id">🇮🇩 ID</option>
            </select>
        </label>
    );
}
