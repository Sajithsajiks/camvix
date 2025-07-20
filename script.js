// 3D Network Animation
function createNetworkNodes() {
  const container = document.getElementById("networkNodes");
  const nodeCount = 30;
  const nodes = [];

  for (let i = 0; i < nodeCount; i++) {
    const node = document.createElement("div");
    node.className = "node";
    node.style.left = Math.random() * 100 + "%";
    node.style.top = Math.random() * 100 + "%";
    node.style.animationDelay = Math.random() * 3 + "s";
    container.appendChild(node);
    nodes.push({
      element: node,
      x: parseFloat(node.style.left),
      y: parseFloat(node.style.top),
    });
  }

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const distance = Math.sqrt(
        Math.pow(nodes[i].x - nodes[j].x, 2) +
          Math.pow(nodes[i].y - nodes[j].y, 2)
      );

      if (distance < 25) {
        const connection = document.createElement("div");
        connection.className = "connection";

        const angle =
          (Math.atan2(nodes[j].y - nodes[i].y, nodes[j].x - nodes[i].x) * 180) /
          Math.PI;
        const length = distance + "%";

        connection.style.left = nodes[i].x + "%";
        connection.style.top = nodes[i].y + "%";
        connection.style.width = length;
        connection.style.transform = `rotate(${angle}deg)`;
        connection.style.animationDelay = Math.random() * 2 + "s";

        container.appendChild(connection);
      }
    }
  }
}

// Contact Modal Functions
function openContactModal() {
  document.getElementById("contactModal").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeContactModal() {
  document.getElementById("contactModal").style.display = "none";
  document.body.style.overflow = "auto";
}

document.getElementById("contactModal").addEventListener("click", function (e) {
  if (e.target === this) closeContactModal();
});

document.addEventListener("DOMContentLoaded", function () {
  createNetworkNodes();
});
