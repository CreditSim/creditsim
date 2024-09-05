document.addEventListener("DOMContentLoaded", function () {
  // Simula a resposta do JSON com as versões (substitua com um fetch se necessário)
  const data = {
    latest: {
      version: "2.0.0",
      link: "https://github.com/ThiagoSGomes-Dev/crediario/releases/downloads/versao-2.0.0.zip",
    },
    previous: [
      {
        version: "1.9.0",
        link: "https://github.com/ThiagoSGomes-Dev/crediario/releases/downloads/versao-1.9.0.zip",
      },
      {
        version: "1.8.0",
        link: "https://github.com/ThiagoSGomes-Dev/crediario/releases/downloads/versao-1.8.0.zip",
      },
      {
        version: "1.7.0",
        link: "https://github.com/ThiagoSGomes-Dev/crediario/releases/downloads/versao-1.7.0.zip",
      },
    ],
  };

  // Atualiza as informações da versão mais recente
  const latestVersionLink = document.getElementById("latest-version-link");
  latestVersionLink.textContent = `Baixar Versão ${data.latest.version}`;
  latestVersionLink.href = data.latest.link;

  // Preenche o select com as versões anteriores
  const versionSelect = document.getElementById("previous-versions");
  data.previous.forEach((version) => {
    const option = document.createElement("option");
    option.value = version.link; // O valor será o link de download
    option.textContent = `Versão ${version.version}`;
    versionSelect.appendChild(option);
  });

  // Exibe o botão de download ao selecionar uma versão anterior
  const downloadPreviousButton = document.getElementById(
    "download-previous-version"
  );
  versionSelect.addEventListener("change", function () {
    if (versionSelect.value) {
      // Mostrar o botão de download e definir o link correto
      downloadPreviousButton.style.display = "inline-block";
      downloadPreviousButton.href = versionSelect.value;
    } else {
      // Esconder o botão se nenhuma versão for selecionada
      downloadPreviousButton.style.display = "none";
    }
  });
});
