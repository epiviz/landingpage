/**
 * Dropdown menu
 */
document.addEventListener("DOMContentLoaded", function () {
  const menus = document.querySelectorAll(".navbar-burger");
  const dropdowns = document.querySelectorAll(".navbar-menu");

  if (menus.length && dropdowns.length) {
    for (var i = 0; i < menus.length; i++) {
      menus[i].addEventListener("click", function () {
        for (var j = 0; j < dropdowns.length; j++) {
          dropdowns[j].classList.toggle("hidden");
        }
      });
    }
  }
});

(function load_workspaces() {
  var api = "http://localhost:8001/api/v1/";
  var epiviz_url = "http://localhost:8776";

  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var ws_dom = "";
      data.forEach(function (ws, i) {
        // ws_dom += `
        //     <div class="md:w-1/3 p-8">
        //         <img class="w-1/3 mx-auto mb-4 full" src="images/epiviz-icon.jpg" alt="Workspace Screenshot">
        //         <h3 class="text-xl font-heading">` + ws.title + `</h3>
        //         <p class="mt-4 text-gray-500 leading-relaxed">` + ws.description + `</p>
        //         <div class="bg-blue-500 hover:bg-blue-700 mx-auto text-white font-bold py-2 px-2 rounded">
        //             <a href="` + epiviz_url + "?ws=" + ws.id + `">Open Workspace</a>
        //         </div>
        //     </div>
        // `
        // <img class="mx-auto mb-4 full" src="images/epiviz-icon.jpg" alt="Workspace Screenshot">

        ws_dom +=
          `
                <div class="w-full lg:w-1/4 px-4 mb-4 lg:mb-2">
                    <div class="h-full border rounded shadow">
                        <div class="flex items-center justify-between py-3 px-4 border-b">
                            <h3 class="text-lg font-heading">` +
                                ws.title +
                            `</h3>
                            <span class="py-1 px-3 text-sm text-white font-semibold bg-blue-500 hover:bg-blue-700 rounded-full">
                                <a href="` +
                                    epiviz_url +
                                    "?ws=" +
                                    ws.id +
                                `">Open</a>
                            </span>
                        </div>
                        <div class="flex flex-col px-4">
                            <p class="border-b mt-4 text-gray-500 leading-relaxed">` +
                                ws.description +
                            `</p>
                            <span class="text-black-500 text-xs mx-auto py-2 px-4 rounded">
                                Genome : ` +
                                    ws.genomes[0] +
                                `
                            </span>
                        </div>
                    </div>
                </div>
            `;
      });

      document.querySelector("#workspaceCards").innerHTML = ws_dom;
    });
})();
