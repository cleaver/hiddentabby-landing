const features = {
  manage: {
    label: "THE WORKSPACE MANAGER",
    title: "All your groups, in one place.",
    description: "Rename, recolor, reorder, or remove groups from the full-page Workspace Manager.",
    image: "assets/manage-workspaces.png",
    alt: "HiddenTabby Workspace Manager showing named tab groups and controls for opening them.",
    number: "01",
  },
  switch: {
    label: "ONE-CLICK SWITCHING",
    title: "Change focus in a click.",
    description: "Choose a group in the toolbar popup to bring its saved tabs back across the windows that belong to it.",
    image: "assets/switch-workspaces.png",
    alt: "HiddenTabby toolbar popup with a list of workspaces to switch between.",
    number: "02",
  },
  move: {
    label: "DRAG AND DROP",
    title: "Put a tab where it belongs.",
    description: "Move tabs between groups in the Workspace Manager and keep related browsing together.",
    image: "assets/move-tabs.png",
    alt: "HiddenTabby Workspace Manager showing a tab being dragged from Work into Cats.",
    number: "03",
  },
};

const tabs = Array.from(document.querySelectorAll("[role='tab']"));
const panel = document.querySelector("[role='tabpanel']");
const image = document.querySelector("#showcase-image");
const label = document.querySelector("#showcase-label");
const title = document.querySelector("#showcase-title");
const description = document.querySelector("#showcase-description");
const current = document.querySelector("#image-count-current");

function selectFeature(tab, moveFocus = false) {
  const feature = features[tab.dataset.feature];
  if (!feature) return;

  tabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
    item.classList.toggle("is-active", selected);
  });

  image.src = feature.image;
  image.alt = feature.alt;
  label.textContent = feature.label;
  title.textContent = feature.title;
  description.textContent = feature.description;
  current.textContent = feature.number;
  panel.setAttribute("aria-labelledby", tab.id);

  if (moveFocus) tab.focus();
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectFeature(tab));
  tab.addEventListener("keydown", (event) => {
    let nextIndex;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    if (nextIndex !== undefined) {
      event.preventDefault();
      selectFeature(tabs[nextIndex], true);
    }
  });
});

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());
