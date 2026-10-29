// App Logic for Resort & Hotel Management
const SAMPLE_ROOMS = [
  { id: 1, name: 'Deluxe Hướng Biển', type: 'deluxe', price: 1800000, guests: 2, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80', desc: 'Phòng Deluxe rộng 45m2, ban công riêng nhìn thẳng ra biển xanh ngọc.' },
  { id: 2, name: 'Executive Suite Hoàng Gia', type: 'suite', price: 3500000, guests: 4, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80', desc: 'Suite cao cấp 80m2 có phòng khách riêng, bồn tắm sục Jacuzzi.' },
  { id: 3, name: 'Beachfront Pool Villa', type: 'villa', price: 6500000, guests: 6, image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80', desc: 'Villa riêng biệt có hồ bơi vô cực riêng, lối đi thẳng ra bãi biển riêng.' }
];

document.addEventListener('DOMContentLoaded', () => {
  const roomContainer = document.getElementById('featuredRooms');
  if (roomContainer) {
    roomContainer.innerHTML = SAMPLE_ROOMS.map(r => `
      <div class="card">
        <img class="card-img" src="${r.image}" alt="${r.name}">
        <div class="card-body">
          <span class="card-badge">Tối đa ${r.guests} khách</span>
          <h3 class="card-title" style="margin-top: 8px;">${r.name}</h3>
          <p style="color: #64748b; font-size: 14px; margin-bottom: 12px;">${r.desc}</p>
          <div class="card-price">${r.price.toLocaleString('vi-VN')} VNĐ / đêm</div>
          <a href="booking.html?roomId=${r.id}" class="btn btn-primary" style="width: 100%; text-align: center;">Đặt phòng ngay</a>
        </div>
      </div>
    `).join('');
  }

  // Check login state
  const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
  const authNav = document.getElementById('authNav');
  if (authNav && user) {
    authNav.innerHTML = `
      <span style="font-weight: 600; margin-right: 10px;">Xin chào, ${user.name}</span>
      <button class="btn btn-outline" id="btnLogout">Đăng xuất</button>
    `;
    document.getElementById('btnLogout').onclick = () => {
      localStorage.removeItem('currentUser');
      window.location.reload();
    };
  }
});
