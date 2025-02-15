import React from "react";
function NatCompB({ natName, natId, natBirth, natPhone, natClass }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, borderRadius: 5 }}>
      <p><strong>Họ và Tên:</strong> {natName}</p>
      <p><strong>Mã Sinh Viên:</strong> {natId}</p>
      <p><strong>Ngày Sinh:</strong> {natBirth}</p>
      <p><strong>Điện Thoại:</strong> {natPhone}</p>
      <p><strong>Tên Lớp:</strong> {natClass}</p>
    </div>
  );
}

export default NatCompB;
