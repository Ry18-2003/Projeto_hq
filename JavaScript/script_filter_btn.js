const origemFilter = document.getElementById("origemFilter");
        const statusFilter = document.getElementById("statusFilter");
        const results = document.querySelector(".results");

        origemFilter.addEventListener("change", filterResults);
        statusFilter.addEventListener("change", filterResults);

        function filterResults() {
            const origemValue = origemFilter.value;
            const statusValue = statusFilter.value;

            // Oculta todos os resultados
            Array.from(results.children).forEach(item => {
                item.style.display = "none";
            });

            // Exibe apenas os resultados correspondentes às seleções
            Array.from(results.children).forEach(item => {
                const origemData = item.getAttribute("data-origem");
                const statusData = item.getAttribute("data-status");

                if (
                    (origemValue === "qualquer" || origemData === origemValue) &&
                    (statusValue === "qualquer" || statusData === statusValue)
                ) {
                    item.style.display = "";
                }
            });
        }