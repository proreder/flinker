
  

    // Configuración de Firebase (reemplaza con tus valores o variables de entorno)
    var  config = {
        appId: "1:244533337010:android:297765d438bb5ae6e2e2ab",
        apiKey: "AIzaSyBj7pQy-V_rh2J_atjUvXimljShHUFf8M",
        authDomain: "flinker-8c0c9.web.app",
        databaseURL: "https://flinker-8c0c9-default-rtdb.firebaseio.com/",
        projectId: "flinker-8c0c9",
        storageBucket: "flinker-8c0c9.firebasestorage.app",
        messagingSenderId: "244533337010"
        
      };
  
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    document.addEventListener("DOMContentLoaded", async function () {
        const slider = document.getElementById("valueSlider");
        const valueDisplay = document.getElementById("valueDisplay");
        const container = document.getElementById("sliderContainer");
  
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "personas"));
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
  
    async function renderSlider() {
      const data = await fetchData();
      container.innerHTML = "";
      data.forEach((person) => {
        const slide = document.createElement("div");
        slide.className = "slide";
        slide.innerHTML = `
          <img src="${person.image}" alt="${person.name}" class="avatar"/>
          <h2>${person.name}</h2>
          <p>Edad: ${person.age}</p>
        `;
        container.appendChild(slide);
      });
    }
  
    slider.addEventListener("input", function () {
      valueDisplay.textContent = `Valor: ${slider.value}`;
    });
  
    renderSlider();
  });
  