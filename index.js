let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick = () => {
    navbar.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', function() {
    // الحصول على قائمة الأعضاء
    const membersList = document.getElementById('members-list');

    // دالة لترتيب عناصر القائمة بشكل عشوائي
    function Reorder_randomly() {
        for (let i = membersList.children.length; i >= 0; i--) {
            membersList.appendChild(membersList.children[Math.random() * i | 0]);
        }
    }

    // استدعاء ترتيب_عشوائي أوليًا
    Reorder_randomly();

});