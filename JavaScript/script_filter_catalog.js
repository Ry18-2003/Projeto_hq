const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const tagSuggestions = document.getElementById("tagSuggestions");
const catalog = document.querySelectorAll(".product_catalog");
const advancedModeCheckbox = document.getElementById("advancedMode");
let selectedSuggestionIndex = -1;

// Atualiza os resultados da pesquisa quando o usuário pressiona "Enter" ou clica no botão de pesquisa
searchButton.addEventListener("click", performSearch);
searchInput.addEventListener("keyup", handleKeyPress);
searchInput.addEventListener("input", handleInput);

function handleKeyPress(event) {
    const suggestions = document.querySelectorAll("#tagSuggestions ul li");

    if (event.key === "Enter") {
        performSearch();
    } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        handleArrowKey(event, suggestions);
    } else {
        selectedSuggestionIndex = -1;
        performSearch();
    }
}

function handleArrowKey(event, suggestions) {
    if (event.key === "ArrowUp" && selectedSuggestionIndex > 0) {
        selectedSuggestionIndex--;
    } else if (event.key === "ArrowDown" && selectedSuggestionIndex < suggestions.length - 1) {
        selectedSuggestionIndex++;
    }

    suggestions.forEach((suggestion, index) => {
        if (index === selectedSuggestionIndex) {
            suggestion.classList.add("selected");
            searchInput.value = suggestion.textContent; // Preenche o input com a sugestão selecionada
        } else {
            suggestion.classList.remove("selected");
        }
    });
}

function handleInput() {
    const searchTerm = searchInput.value.toLowerCase();
    const suggestions = getTagSuggestions(searchTerm);
    displayTagSuggestions(suggestions);
}

// Retorna sugestões de tags com base no termo de pesquisa
function getTagSuggestions(searchTerm) {
    const uniqueTags = new Set();
    const searchTerms = searchTerm.split(",").map(term => term.trim());

    searchTerms.forEach(term => {
        catalog.forEach(product => {
            const productTags = product.getAttribute("data-tags").split(",").map(tag => tag.trim());
            productTags.forEach(tag => {
                if (tag.includes(term)) {
                    uniqueTags.add(tag);
                }
            });
        });
    });

    return Array.from(uniqueTags);
}

// Exibe sugestões de tags
function displayTagSuggestions(suggestions) {
    tagSuggestions.innerHTML = "";
    const tagSuggestionsList = document.createElement("ul");
    suggestions.forEach((tag, index) => {
        const li = document.createElement("li");
        li.textContent = tag;
        li.addEventListener("click", () => {
            handleSuggestionClick(tag);
        });
        tagSuggestionsList.appendChild(li);
    });
    tagSuggestions.appendChild(tagSuggestionsList);
}

function handleSuggestionClick(tag) {
    const currentValue = searchInput.value.trim();
    const currentTags = currentValue.split(",").map(tag => tag.trim());

    if (!currentTags.includes(tag)) {
        const newValue = currentTags.length > 0 ? `${currentValue} ${tag}` : tag;
        searchInput.value = newValue;
    } else {
        searchInput.value = tag;
    }

    tagSuggestions.innerHTML = "";
    selectedSuggestionIndex = -1;
    performSearch();
}

// Atualiza os resultados da pesquisa
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedTags = searchTerm.split(",").map(tag => tag.trim());
    const advancedMode = advancedModeCheckbox.checked;

    catalog.forEach(product => {
        const productTags = product.getAttribute("data-tags").split(",").map(tag => tag.trim());

        if (searchTerm === "") {
            product.style.display = "";
        } else if (advancedMode) {
            const isVisible = selectedTags.every(tag => productTags.includes(tag));
            product.style.display = isVisible ? "" : "none";
        } else {
            const isVisible = selectedTags.some(tag => productTags.includes(tag));
            product.style.display = isVisible ? "" : "none";
        }
    });
}
