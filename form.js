(() => {
  const form = document.getElementById('entryForm');
  const tableBody = document.getElementById('tableBody');


  form.addEventListener('reset', () => {
    form.name.focus();
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const studentId = form.studentId.value.trim();
    const batch = form.batch.value;

    if (!name || !email || !studentId || !batch) return; // basic guard

    const index = tableBody.children.length + 1;

    const tr = document.createElement('tr');
    tr.className = 'hover:bg-slate-50';
    tr.innerHTML = `
      <td class="px-4 py-3 text-sm text-slate-500">${index}</td>
      <td class="px-4 py-3 font-medium">${name}</td>
      <td class="px-4 py-3">${email}</td>
      <td class="px-4 py-3">${studentId}</td>
      <td class="px-4 py-3">${batch}</td>
    `;
    tableBody.appendChild(tr);

    form.reset();
    form.name.focus();
  });
})();
