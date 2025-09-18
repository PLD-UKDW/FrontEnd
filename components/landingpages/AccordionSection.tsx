"use client";
import { useState } from "react";

export default function AccordionSection() {
    const [open, setOpen] = useState<number | null>(null);
    const [nestedOpen, setNestedOpen] = useState<number | null>(null);

    return (
        <div
            id="accordion-nested-parent"
            className="mt-16 w-full max-w-3xl mx-auto mb-10"
            data-accordion="collapse"
        >
            <h2
                id="faq-heading"
                className="text-base md:text-2xl lg:text-3xl font-black text-[#3e4095] tracking-tight leading-tight mb-6 text-center"
            >
                Pertanyaan Umum <span className="text-[#02a502]">& </span>Sulosinya
            </h2>

            {/* Accordion 1 */}
            <h2 id="accordion-collapse-heading-1">
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium
                        rtl:text-right border border-gray-200 rounded-t-xl
                        focus:ring-2 focus:ring-gray-200
                        gap-3 text-[#02a502]
                        hover:bg-gray-50 hover:border-gray-300 transition-colors"
                    aria-expanded={open === 1}
                    aria-controls="accordion-collapse-body-1"
                    onClick={() => setOpen(open === 1 ? null : 1)}
                >
                    <span>What is Flowbite?</span>
                    <svg
                        data-accordion-icon
                        className={`w-3 h-3 rotate-180 shrink-0 transition-transform ${open === 1 ? "" : "-rotate-90"
                            }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                        />
                    </svg>
                </button>
            </h2>
            <div
                id="accordion-collapse-body-1"
                className={`${open === 1 ? "" : "hidden"}`}
                aria-labelledby="accordion-collapse-heading-1"
            >
                <div className="p-5 border border-gray-200 bg-[#f1f5f9]">
                    <p className="mb-2 text-gray-700">
                        Flowbite is an open-source library of interactive components built
                        on top of Tailwind CSS including buttons, dropdowns, modals,
                        navbars, and more.
                    </p>
                    <p className="mb-2 text-gray-700">
                        Check out this guide to learn how to{" "}
                        <a
                            href="/docs/getting-started/introduction/"
                            className="text-blue-600 hover:underline"
                        >
                            get started
                        </a>{" "}
                        and start developing websites even faster with components on top of
                        Tailwind CSS.
                    </p>
                    <p className="mb-4 text-gray-700">
                        What are the differences between Flowbite and Tailwind UI?
                    </p>

                    {/* Nested Accordion */}
                    <div id="accordion-nested-collapse" data-accordion="collapse">
                        {/* Nested 1 */}
                        <h2 id="accordion-nested-collapse-heading-1">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full p-5 font-medium
                                rtl:text-right border border-gray-200
                                focus:ring-2 focus:ring-gray-200
                                gap-3 text-[#02a502]
                                hover:bg-gray-50 hover:border-gray-300 transition-colors"
                                aria-expanded={nestedOpen === 1}
                                aria-controls="accordion-nested-collapse-body-1"
                                onClick={() =>
                                    setNestedOpen(nestedOpen === 1 ? null : 1)
                                }
                            >
                                <span>Open source</span>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 h-3 rotate-180 shrink-0 transition-transform ${nestedOpen === 1 ? "" : "-rotate-90"
                                        }`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id="accordion-nested-collapse-body-1"
                            className={`${nestedOpen === 1 ? "" : "hidden"}`}
                            aria-labelledby="accordion-nested-collapse-heading-1"
                        >
                            <div className="p-5 border border-gray-200 bg-[#f1f5f9]">
                                <p className="text-gray-700">
                                    The main difference is that the core components from Flowbite
                                    are open source under the MIT license, whereas Tailwind UI is
                                    a paid product.
                                </p>
                            </div>
                        </div>

                        {/* Nested 2 */}
                        <h2 id="accordion-nested-collapse-heading-2">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full p-5 font-medium 
                           rtl:text-right border border-gray-200 
                           focus:ring-2 focus:ring-gray-200 
                           gap-3 text-[#02a502] 
                           hover:bg-gray-50 hover:border-gray-300 transition-colors"
                                aria-expanded={nestedOpen === 2}
                                aria-controls="accordion-nested-collapse-body-2"
                                onClick={() =>
                                    setNestedOpen(nestedOpen === 2 ? null : 2)
                                }
                            >
                                <span>Architecture</span>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 h-3 rotate-180 shrink-0 transition-transform ${nestedOpen === 2 ? "" : "-rotate-90"
                                        }`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id="accordion-nested-collapse-body-2"
                            className={`${nestedOpen === 2 ? "" : "hidden"}`}
                            aria-labelledby="accordion-nested-collapse-heading-2"
                        >
                            <div className="p-5 border border-gray-200 bg-[#f1f5f9]">
                                <p className="text-gray-700">
                                    Another difference is that Flowbite relies on smaller and
                                    standalone components, whereas Tailwind UI offers sections of
                                    pages.
                                </p>
                            </div>
                        </div>

                        {/* Nested 3 */}
                        <h2 id="accordion-nested-collapse-heading-3">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full p-5 font-medium 
                           rtl:text-right border border-gray-200 
                           focus:ring-2 focus:ring-gray-200 
                           gap-3 text-[#02a502] 
                           hover:bg-gray-50 hover:border-gray-300 transition-colors"
                                aria-expanded={nestedOpen === 3}
                                aria-controls="accordion-nested-collapse-body-3"
                                onClick={() =>
                                    setNestedOpen(nestedOpen === 3 ? null : 3)
                                }
                            >
                                <span>Can I use both?</span>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 h-3 rotate-180 shrink-0 transition-transform ${nestedOpen === 3 ? "" : "-rotate-90"
                                        }`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id="accordion-nested-collapse-body-3"
                            className={`${nestedOpen === 3 ? "" : "hidden"}`}
                            aria-labelledby="accordion-nested-collapse-heading-3"
                        >
                            <div className="p-5 border border-gray-200 bg-[#f1f5f9]">
                                <p className="mb-2 text-gray-700">
                                    We actually recommend using both Flowbite, Flowbite Pro, and
                                    even Tailwind UI as there is no technical reason stopping you
                                    from using the best of two worlds.
                                </p>
                                <p className="mb-2 text-gray-700">
                                    Learn more about these technologies:
                                </p>
                                <ul className="ps-5 text-gray-700 list-disc">
                                    <li>
                                        <a
                                            href="https://flowbite.com/pro/"
                                            className="text-blue-600 hover:underline"
                                        >
                                            Flowbite Pro
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://tailwindui.com/"
                                            rel="nofollow"
                                            className="text-blue-600 hover:underline"
                                        >
                                            Tailwind UI
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* End Nested Accordion */}
                </div>
            </div>

            {/* Accordion 2 */}
            <h2 id="accordion-collapse-heading-2">
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium 
                        rtl:text-right border border-gray-200
                        focus:ring-2 focus:ring-gray-200
                        gap-3 text-[#02a502]
                        hover:bg-gray-50 hover:border-gray-300 transition-colors"
                    aria-expanded={open === 2}
                    aria-controls="accordion-collapse-body-2"
                    onClick={() => setOpen(open === 2 ? null : 2)}
                >
                    <span>Is there a Figma file available?</span>
                    <svg
                        data-accordion-icon
                        className={`w-3 h-3 rotate-180 shrink-0 transition-transform ${open === 2 ? "" : "-rotate-90"
                            }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                        />
                    </svg>
                </button>
            </h2>
            <div
                id="accordion-collapse-body-2"
                className={`${open === 2 ? "" : "hidden"}`}
                aria-labelledby="accordion-collapse-heading-2"
            >
                <div className="p-5 border border-gray-200 bg-[#f1f5f9]">
                    <p className="mb-2 text-gray-700">
                        Flowbite is first conceptualized and designed using the Figma
                        software so everything you see in the library has a design
                        equivalent in our Figma file.
                    </p>
                    <p className="text-gray-700">
                        Check out the{" "}
                        <a
                            href="https://flowbite.com/figma/"
                            className="text-blue-600 hover:underline"
                        >
                            Figma design system
                        </a>{" "}
                        based on the utility classes from Tailwind CSS and components from
                        Flowbite.
                    </p>
                </div>
            </div>
        </div>
    );
}
