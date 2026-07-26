import { useState } from "react";
import { courses } from "../data/courses";
import { seminaries } from "../data/seminaries";

import "../CompleteCertifications.css";

export default function CompleteCertifications() {

    const [activeTab, setActiveTab] = useState("courses");

    const ITEMS_PER_PAGE = 10;

    const [currentPage, setCurrentPage] = useState(1);

    const data =
        activeTab === "courses"
            ? courses
            : seminaries;

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

    const start = (currentPage - 1) * ITEMS_PER_PAGE;

    const currentData = data.slice(start, start + ITEMS_PER_PAGE);

    const getPageNumbers = () => {

        const pages = [];

        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        pages.push(1);

        if (currentPage > 4) {
            pages.push("...");
        }

        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (currentPage < totalPages - 3) {
            pages.push("...");
        }

        pages.push(totalPages);

        return pages;
    };

    return (
        <section className="complete-certifications">

            <h1>CERTIFICACIONES COMPLETAS</h1>

            <div className="buttons">

                <button
                    className={activeTab === "courses" ? "active" : ""}
                    onClick={() => {
                        setActiveTab("courses");
                        setCurrentPage(1);
                    }}
                >
                    CURSOS
                </button>

                <button
                    className={activeTab === "seminaries" ? "active" : ""}
                    onClick={() => {
                        setActiveTab("seminaries");
                        setCurrentPage(1);
                    }}
                >
                    SEMINARIOS
                </button>

            </div>

            <div className="cards">

                {currentData.map((item) => (

                    <div className="card" key={item.id}>

                        <h3>{item.descripcion}</h3>

                        <p>
                            <strong>Institución:</strong>
                            <br />
                            {item.institucion}
                        </p>

                        <p>
                            <strong>Periodo:</strong>
                            <br />
                            {item.periodo}
                        </p>

                        <a
                            href={activeTab === "courses" ? `/certifications/C${item.id}.jpg` : `/certifications/S${item.id}.jpg`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="view-btn"
                        >
                            Ver certificado
                        </a>

                    </div>

                ))}

            </div>
            <div className="pagination">

                <button
                    disabled={currentPage === 1}
                    onClick={() => {
                        if (currentPage > totalPages) {
                            setCurrentPage(currentPage - 1);
                        }
                    }}
                >
                    ⏮
                </button>

                {getPageNumbers().map((page, index) =>

                    page === "..." ? (

                        <span key={`dots-${index}`} className="dots">
                            ...
                        </span>

                    ) : (

                        <button
                            key={`${page}-${index}`}
                            className={currentPage === page ? "active" : ""}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>

                    )

                )}

                <button
                    disabled={currentPage === totalPages}
                    onClick={() => {
                        if (currentPage < totalPages) {
                            setCurrentPage(currentPage + 1);
                        }
                    }}
                >
                    ⏭
                </button>

            </div>
        </section>
    );
}