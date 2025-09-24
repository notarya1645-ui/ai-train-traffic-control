  // बहुत हल्का JS सिर्फ़ tab switching के लिए
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        // deactivate सभी tabs
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        // hide सभी panels
        document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
        // activate clicked
        tab.classList.add('active');
        const panelId = tab.getAttribute('data-panel');
        document.getElementById(panelId).classList.add('active');
      });
    });
    document.addEventListener('DOMContentLoaded', () => {
  // Sabhi tabs aur panels ko select karna
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.panel');

  // Har tab par click hone par active class ko toggle karna
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Sabhi tabs se 'active' class ko hataana
      tabs.forEach(t => t.classList.remove('active'));
      // Clicked tab ko 'active' class dena
      tab.classList.add('active');

      // Sabhi panels ko chhupana
      panels.forEach(panel => {
        panel.classList.remove('active');
      });

      // Clicked tab se corresponding panel ko dikhana
      const panelId = tab.getAttribute('data-panel');
      const activePanel = document.getElementById(panelId);
      if (activePanel) {
        activePanel.classList.add('active');
      }
    });
  });
});