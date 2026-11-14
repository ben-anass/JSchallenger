const stok = 0
const badge = document.querySelector("#badge")

if (stok > 0) {

  badge.textContent =  "disponible"
  badge.classList.add("bg-green-200")

} else if(stck <= 3) {

  badge.textContent = "presque epuise"
  badge.classList.add("bg-yellow-200")

} else {
  badge.textContent = "rapture"
  badge.classList.add("bg-red-200")

}
badge.textContent = stok > 0 ? "disponible" : "rupture"