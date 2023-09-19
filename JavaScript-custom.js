 //hàm tải trang
 function onPageLoading() {
    createOption();
}

//hàm đổ option vào ô SELECT quận/huyện
function createOption() {
    var vDistrict = [
        { name: "Thành phố Thủ Đức", value: "tp Thủ Đức" },
        { name: "Quận 1", value: "Q1" },
        { name: "Quận 3", value: "Q3" },
        { name: "Quận 4", value: "Q4" },
        { name: "Quận 5", value: "Q5" },
        { name: "Quận 6", value: "Q6" },
        { name: "Quận 7", value: "Q7" },
        { name: "Quận 8", value: "Q8" },
        { name: "Quận 10", value: "Q10" },
        { name: "Quận 11", value: "Q11" },
        { name: "Quận 12", value: "Q12" },
        { name: "Quận Bình Tân", value: "Q Bình Tân" },
        { name: "Quận Bình Thạnh", value: "Q Bình Thạnh" },
        { name: "Quận Gò Vấp", value: "Q Gò Vấp" },
        { name: "Quận Phú Nhuận", value: "Q Phú Nhuận" },
        { name: "Quận Tân Bình", value: "Q Tân Bình" },
        { name: "Quận Tân Phú", value: "Q Tân Phú" },
        { name: "Huyện Bình Chánh", value: "H Bình Chánh" },
        { name: "Huyện Cần Giờ", value: "H Cần Giờ" },
        { name: "Huyện Củ Chi", value: "H Củ Chi" },
        { name: "Huyện Hóc Môn", value: "H Hóc Môn" },
        { name: "Huyện Nhà Bè", value: "H Nhà Bè" },
    ]
    var vSelectQuanHuyen = document.getElementById("sel-quan-huyen");
    for (var bI = 0; bI < vDistrict.length; bI++) {
        var bNewOption = document.createElement("option");
        bNewOption.setAttribute("value", vDistrict[bI].value);
        var bNewOptionText = document.createTextNode(vDistrict[bI].name);
        bNewOption.appendChild(bNewOptionText);
        vSelectQuanHuyen.appendChild(bNewOption);
    }
}
// hàm hiển thị div thẻ
function onBtnThanhToan(){
    document.getElementById("card-icon").style.display = "block";
}

