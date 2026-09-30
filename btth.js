const rawInput = " med-rhm-0815-bhyt ";

const cleanInput = rawInput.trim().toUpperCase();

if (!cleanInput.startsWith("MED-")){
    console.log("Mã phải bắt đầu từ MED- ");
}

const department = cleanInput.slice(4 , 7);
const serial = cleanInput.slice(8 , 12);
const insurance = cleanInput.includes("BHYT");

const basePrice = 150000;
let price = basePrice;

if(insurance){
    price = 20 / 100 * basePrice;
}

let departmentName = "";

if(department === "RHM"){
    departmentName = "Răng hàm mặt";
} else if (department === "TAI"){
    departmentName = "Tai mũi họng";
} else if (department === "MAT"){
    departmentName = "Mắt";
} else {
    console.log("Không xác định");
}

const line = "=".repeat(35);

console.log(`
${line}
PHIẾU TIẾP ĐÓN
${line}
Mã phiếu : ${cleanInput}
Chuyên khoa : ${department}
Số thứ tự : ${serial}
BHYT : ${insurance ? "Có" : "Không"}
Chi phí : ${price.toLocaleString()} VND
${line}
`)