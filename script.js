


// Función de control de acceso al estar el código accesible en GitHub
(function () {
    const contraseñaCorrecta = "1968"; // Puedes cambiar la contraseña aquí
    let intentos = 3; // Número de intentos permitidos

    while (intentos > 0) {
        let contraseñaIngresada = prompt("Uso exclusivo XTRAICE - 🔒 Introduce la contraseña:");

        if (contraseñaIngresada === contraseñaCorrecta) {
            alert("PACKING LIST XTRAICE \n\n ✅ Acceso concedido.\n BIENVENIDO. \n\n Si ves algún error en la ejecución de la aplicación o sus resultados, puedes comunicármelo vía mail: tono@xtraice.com");
            return; // Permite que la aplicación continúe
        } else {
            intentos--;
            alert(`❌ Contraseña incorrecta. Intentos restantes: ${intentos}`);
        }
    }

    // Si se acaban los intentos, redirigir o bloquear acceso
    alert("🚫 Acceso denegado");
    document.body.innerHTML = "<h1>Acceso bloqueado ❌</h1>";
})();



let idioma = 'ES';

function cambiarIdioma(nuevoIdioma) {
    idioma = nuevoIdioma;
    renderTable();
}


const materiales = [
        { description: "Cleaning Machine 220v", nameEs: "Máquina de limpieza 220v", netWeight: 50.0, taricNumber: "8424.30.90.00" },
        { description: "Double runner shoe skate", nameEs: "Patín doble cuchilla", netWeight: 0.5, taricNumber: "9506.70.10.00" },
        { description: "Kit No Fix 4700 mm", nameEs: "Kit No Fix 4700 mm", netWeight: 8.0, taricNumber: "7214997910" },
        { description: "Kit No Fix 6000 mm", nameEs: "Kit No Fix 6000 mm", netWeight: 10.0, taricNumber: "7214997910" },
        { description: "Kit No Fix 700 mm", nameEs: "Kit No Fix 700 mm", netWeight: 2.0, taricNumber: "7214997910" },
        { description: "Amplifier", nameEs: "Amplificador", netWeight: 9.0, taricNumber: "85.18.40" },
        { description: "Scaffold with ladder", nameEs: "Andamio con escalera", netWeight: 70.0, taricNumber: "" },
        { description: "Antibacterial spray", nameEs: "Spray antibacteriano", netWeight: 0.5, taricNumber: "8424.81.10.00" },
        { description: "Barrier base for raised floor", nameEs: "Base de valla para suelo elevado", netWeight: 1.0, taricNumber: "7306.61.99" },
        { description: "Bear Skating Aid", nameEs: "Ayuda de patinaje oso", netWeight: 12.0, taricNumber: "9503.00.00.90" },
        { description: "Bench", nameEs: "Banco", netWeight: 13.4, taricNumber: "9401.69.00.00" },
        { description: "Caja Herramienta", nameEs: "Caja de herramientas", netWeight: 100.0, taricNumber: "8303009000" },
        { description: "Cleaning kit Home", nameEs: "Kit de limpieza doméstico", netWeight: 2.5, taricNumber: "3402.90.10" },
        { description: "Foam Mats", nameEs: "Colchonetas", netWeight: 10.0, taricNumber: "" },
        { description: "Colour light", nameEs: "Luz de colores", netWeight: 5.0, taricNumber: "85.41.40" },
        { description: "Curling Boards", nameEs: "Tableros de curling", netWeight: 5.0, taricNumber: "3403.99.00.10" },
        { description: "Curling Stone", nameEs: "Piedra de curling", netWeight: 5.0, taricNumber: "9506.91.90.00" },
        { description: "Curling Stone Handles", nameEs: "Mangos para piedra de curling", netWeight: 0.5, taricNumber: "3926.90.97.00" },
        { description: "Curved Silver Alum. Barriers", nameEs: "Valla curva aluminio plateado", netWeight: 20.0, taricNumber: "7610.90.00.80" },
        { description: "Curved Silver Fiber Barriers", nameEs: "Valla curva de fibra plateada", netWeight: 20.0, taricNumber: "7019.90.00.20" },
        { description: "Deep Cleaning Kit", nameEs: "Kit de limpieza profunda", netWeight: 22.0, taricNumber: "34.02.90.10" },
        { description: "disassembly pack", nameEs: "Kit de desmontaje", netWeight: 15.0, taricNumber: "8303009000" },
        { description: "DMX", nameEs: "Controlador DMX", netWeight: 0.3, taricNumber: "85.43.70.90" },
        { description: "Double Xtraice Sharpener Machine", nameEs: "Máquina doble afiladora Xtraice", netWeight: 38.0, taricNumber: "8460.31.00.00" },
        { description: "Wooden ladders", nameEs: "Escalones de madera", netWeight: 30.0, taricNumber: "" },
        { description: "Estructura OTON", nameEs: "Estructura OTON", netWeight: 9000.0, taricNumber: "" },
        { description: "Extension cables", nameEs: "Cables de extensión", netWeight: 0.3, taricNumber: "85.36.90.85" },
        { description: "Fiber Gate Barriers", nameEs: "Vallas de fibra con puerta", netWeight: 20.0, taricNumber: "7019.90.00.20" },
        { description: "Flightcase", nameEs: "Maleta de transporte (flightcase)", netWeight: 30.0, taricNumber: "8518.40.30" },
        { description: "Foam Floor", nameEs: "Suelo de espuma", netWeight: 14.0, taricNumber: "3921.19.00.00" },
        { description: "Gloves", nameEs: "Guantes", netWeight: 0.2, taricNumber: "6116.10.20" },
        { description: "Grinding wheel sharpener", nameEs: "Afilador de muela", netWeight: 0.2, taricNumber: "6804.30" },
        { description: "Helmets", nameEs: "Cascos", netWeight: 0.6, taricNumber: "6506.10.10.00" },
        { description: "Hockey goal", nameEs: "Portería de hockey", netWeight: 4.0, taricNumber: "9506.91.90" },
        { description: "Horning stone", nameEs: "Piedra de pulido", netWeight: 0.1, taricNumber: "69.09.11.00" },
        { description: "Installation kit", nameEs: "Kit de instalación", netWeight: 4.5, taricNumber: "8206.00.00.00" },
        { description: "Kit unihockey", nameEs: "Kit de unihockey", netWeight: 5.0, taricNumber: "95.06.99" },
        { description: "Kit Xtraice Curling", nameEs: "Kit de curling Xtraice", netWeight: 1.5, taricNumber: "9506.91.90.00" },
        { description: "Lamas madera", nameEs: "Lamas de madera", netWeight: 250.0, taricNumber: "" },
        { description: "Lights boxes", nameEs: "Cajas de luces", netWeight: 4.0, taricNumber: "8536.00.00.00" },
        { description: "Liquid Lubricant 10L", nameEs: "Lubricante líquido 10L", netWeight: 10.0, taricNumber: "3403.99.00.10" },
        { description: "Liquid Lubricant 1L", nameEs: "Lubricante líquido 1L", netWeight: 1.0, taricNumber: "3403.99.00.10" },
        { description: "Liquido deslizante", nameEs: "Líquido deslizante", netWeight: 10.0, taricNumber: "3403.99.00.10" },
        { description: "Lite Panels", nameEs: "Paneles Lite", netWeight: 12.0, taricNumber: "3901.20.10.00" },
        { description: "Marco metálico", nameEs: "Marco metálico", netWeight: 30.0, taricNumber: "" },
        { description: "Marcos+lamas", nameEs: "Marcos con lamas", netWeight: 40.0, taricNumber: "" },
        { description: "Marcos+lamas", nameEs: "Marcos con lamas", netWeight: 60.0, taricNumber: "" },
        { description: "Microphone", nameEs: "Micrófono", netWeight: 0.3, taricNumber: "85.18.10" },
        { description: "Mop", nameEs: "Fregona", netWeight: 1.0, taricNumber: "3625.20.00" },
        { description: "Mopa", nameEs: "Mopa", netWeight: 1.0, taricNumber: "" },
        { description: "New Barriers Accesory", nameEs: "Accesorio nuevo de vallas", netWeight: 7.8, taricNumber: "73.06.61.99" },
        { description: "Olaf Skating Aid", nameEs: "Ayuda de patinaje Olaf", netWeight: 15.0, taricNumber: "9503.00.49.90" },
        { description: "Paneles tobogán", nameEs: "Paneles de tobogán", netWeight: 12.0, taricNumber: "3901.20.10.00" },
        { description: "Penguin Skating Aid", nameEs: "Ayuda de patinaje pingüino", netWeight: 12.0, taricNumber: "9503.00.00.90" },
        { description: "Plastic cap", nameEs: "Tapa de plástico", netWeight: 0.2, taricNumber: "3924.90.00.90" },
        { description: "Plastics Socks", nameEs: "Fundas plásticas", netWeight: 0.2, taricNumber: "6115.10.90" },
        { description: "Plexiglass Curved Barriers", nameEs: "Vallas curvas de metacrilato", netWeight: 15.0, taricNumber: "4202.99.00.90" },
        { description: "Plexiglass Gate Barriers", nameEs: "Vallas con puerta de metacrilato", netWeight: 15.0, taricNumber: "4202.99.00.90" },
        { description: "Plexiglass Straight Barriers", nameEs: "Vallas rectas de metacrilato", netWeight: 15.0, taricNumber: "4202.99.00.90" },
        { description: "Plugs Lite (500 units)", nameEs: "Tacos Lite (500 uds)", netWeight: 1.1, taricNumber: "3923.50.90.00" },
        { description: "Plugs PRO (500 units)", nameEs: "Tacos PRO (500 uds)", netWeight: 1.9, taricNumber: "3923.50.90.00" },
        { description: "Poster", nameEs: "Cartel", netWeight: 0.2, taricNumber: "4823200000" },
        { description: "Power strips", nameEs: "Regletas eléctricas", netWeight: 0.3, taricNumber: "85.36.90.85" },
        { description: "Pro panels", nameEs: "Paneles Pro", netWeight: 38.5, taricNumber: "3901.20.10.00" },
        { description: "Pro panels Cut", nameEs: "Paneles Pro cortados", netWeight: 19.0, taricNumber: "3901.20.10.00" },
        { description: "Pro ramp", nameEs: "Rampa Pro", netWeight: 28.7, taricNumber: "3901.20.10.00" },
        { description: "Pro Rem panels", nameEs: "Paneles Pro desmontables", netWeight: 34.0, taricNumber: "3901.20.10.00" },
        { description: "Pro Rem panels Cut", nameEs: "Paneles Pro desmontables cortados", netWeight: 25.0, taricNumber: "3901.20.10.00" },
        { description: "Protection Kit", nameEs: "Kit de protección", netWeight: 0.6, taricNumber: "9506.91.90.00" },
        { description: "Pulverizador", nameEs: "Pulverizador", netWeight: 1.2, taricNumber: "8424.81.10.00" },
        { description: "Raised floor access ramp", nameEs: "Rampa de acceso para suelo elevado", netWeight: 15.0, taricNumber: "" },
        { description: "Rubber floor roll", nameEs: "Rollo de suelo de caucho", netWeight: 81.0, taricNumber: "4016.91.00.00" },
        { description: "Separadores", nameEs: "Separadores", netWeight: 3.0, taricNumber: "" },
        { description: "Sharpener machine", nameEs: "Máquina afiladora", netWeight: 16.0, taricNumber: "8460.31.00.80" },
        { description: "Silver Alum. Gate Barriers", nameEs: "Vallas con puerta de aluminio plateado", netWeight: 20.0, taricNumber: "7610.90.00.80" },
        { description: "Silver Alum. Gate-Wooden Barriers", nameEs: "Vallas con puerta aluminio y madera", netWeight: 20.0, taricNumber: "3925.20.00" },
        { description: "Skate aid chairs", nameEs: "Sillas de ayuda al patinaje", netWeight: 13.0, taricNumber: "9506.91.00.30" },
        { description: "Skates C", nameEs: "Patines C", netWeight: 3.0, taricNumber: "9506.70.40.00" },
        { description: "Skates foam inserts", nameEs: "Inserciones de espuma para patines", netWeight: 0.1, taricNumber: "3925.90.00.00" },
        { description: "Skates shelves", nameEs: "Estanterías para patines", netWeight: 40.0, taricNumber: "9403.20.00.86" },
        { description: "Skates X", nameEs: "Patines X", netWeight: 3.0, taricNumber: "9506.70.40.00" },
        { description: "Sledge", nameEs: "Trineo", netWeight: 3.0, taricNumber: "9506.90.01" },
        { description: "Speakers", nameEs: "Altavoces", netWeight: 8.0, taricNumber: "85.18.21.00" },
        { description: "Special Silver Alum-Wooden Barriers", nameEs: "Vallas especiales aluminio-madera plateadas", netWeight: 18.0, taricNumber: "3925.20.00" },
        { description: "Special Silver Alum. Barriers", nameEs: "Vallas especiales de aluminio plateado", netWeight: 18.0, taricNumber: "7610.90.00.80" },
        { description: "Special Silver Alum. Gate Barriers", nameEs: "Vallas con puerta especiales aluminio plateado", netWeight: 18.0, taricNumber: "7610.90.00.80" },
        { description: "Special Silver Fiber Barriers", nameEs: "Vallas especiales de fibra plateada", netWeight: 18.0, taricNumber: "7019.90.00.20" },
        { description: "Squeegee", nameEs: "Racleta", netWeight: 1.0, taricNumber: "3625.20.00" },
        { description: "Squirrel Skating Aid", nameEs: "Ayuda de patinaje ardilla", netWeight: 13.0, taricNumber: "9503.00.49.90" },
        { description: "Straight Fiber Barriers", nameEs: "Vallas rectas de fibra", netWeight: 20.0, taricNumber: "7019.90.00.20" },
        { description: "Straight Silver Alum. Barriers", nameEs: "Vallas rectas de aluminio plateado", netWeight: 20.0, taricNumber: "7610.90.00.80" },
        { description: "Straight Silver Alum.-Wooden Barriers", nameEs: "Vallas rectas aluminio-madera plateadas", netWeight: 20.0, taricNumber: "3925.20.00" },
        { description: "Suelo alveolar", nameEs: "Suelo alveolar", netWeight: 1.0, taricNumber: "" },
        { description: "SuitCase", nameEs: "Maleta", netWeight: 20.0, taricNumber: "" },
        { description: "Support speakers", nameEs: "Soportes para altavoces", netWeight: 0.5, taricNumber: "85.18.21.00" },
        { description: "Target Curling", nameEs: "Diana de curling", netWeight: 70.0, taricNumber: "3901.20.10.00" },
        { description: "Tiras Paneles tobogán", nameEs: "Tiras de paneles de tobogán", netWeight: 1.2, taricNumber: "3901.20.10.00" },
        { description: "Trineos", nameEs: "Trineos", netWeight: 5.0, taricNumber: "" },
        { description: "Vacuum", nameEs: "Aspiradora", netWeight: 11.0, taricNumber: "8508.11.00" },
        { description: "Vallas madera clásica", nameEs: "Vallas de madera clásica", netWeight: 2.0, taricNumber: "" },
        { description: "Wooden house 10m2", nameEs: "Casa de madera 10m²", netWeight: 1200.0, taricNumber: "94.03.30.91" },
        { description: "Wooden house small 4m2", nameEs: "Caseta de madera pequeña 4m²", netWeight: 326.0, taricNumber: "94.03.30.91" },
        { description: "XLR Connect", nameEs: "Conector XLR", netWeight: 0.2, taricNumber: "85.44.49" },
        { description: "Xtraice Cleaning solution", nameEs: "Líquido limpiador Xtraice", netWeight: 10.0, taricNumber: "3402.90.10" },
        { description: "Xtraice Daily Clenaning liquid", nameEs: "Líquido de limpieza diaria Xtraice", netWeight: 5.0, taricNumber: "3402.90.10" }  
];


let data = [];
let lastUsedPalletNumber = 0; // Control de numeración de pallets

// ======================
// FUNCIONES PRINCIPALES
// ======================

function getNextPalletNumber() {
    if (data.length === 0) return 1;
    const lastPallet = data[data.length - 1];
    return lastUsedPalletNumber + lastPallet.unitsPallet;
}

function addPallet() {
    const newPalletNumber = getNextPalletNumber();
    
    const newPallet = {
        id: `pallet-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        palletNum: newPalletNumber,
        grossWeight: 0,
        netWeight: 0,
        dimX: 1.00,
        dimY: 1.00,
        dimZ: 1.00,
        bulk: 0, // Inicializado como número
        stackable: 'YES',
        unitsPallet: 1,
        items: []
    };
    
    data.unshift(newPallet);
    lastUsedPalletNumber = newPalletNumber;
    renderTable();
}

function addPalletProPanels() {
    const material = materiales.find(m => m.description === "Pro panels");

    if (!material) {
        alert("Material 'Pro panels' no encontrado en la lista.");
        return;
    }

    const units = 25;
    const newItem = {
        id: `item-${Date.now()}-1`,
        description: material.description,
        nameEs: material.nameEs,
        units: units,
        netWeightUnit: material.netWeight,
        totalWeight: material.netWeight * units,
        taric: material.taricNumber
    };

    const newPallet = {
        id: `pallet-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        palletNum: getNextPalletNumber(),
        grossWeight: 15,
        netWeight: newItem.totalWeight,
        dimX: 2.00,
        dimY: 1.00,
        dimZ: 0.65,
        bulk: 0,
        stackable: 'YES',
        unitsPallet: 1,
        items: [newItem]
    };

    calculateBulk(newPallet);
    data.unshift(newPallet);
    lastUsedPalletNumber = newPallet.palletNum;
    renderTable();
}

function addItem(palletId) {
    const pallet = data.find(p => p.id === palletId);
    const newItem = {
        id: `item-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        description: "",
        units: "",
        netWeightUnit: 0,
        totalWeight: 0,
        taric: ""
    };
    pallet.items.push(newItem);
    renderTable();
}

function deleteRow(id) {
    if (id.startsWith('pallet') && !confirm(`¿Eliminar pallet ${data.find(p => p.id === id)?.palletNum}?`)) return;
    
    if(id.startsWith('pallet')) {
        data = data.filter(p => p.id !== id);
    } else {
        data.forEach(pallet => {
            pallet.items = pallet.items.filter(item => item.id !== id);
        });
    }
    renderTable();
}

function addPalletPatines() {
    const material = materiales.find(m => m.description === "Skates C");

    if (!material) {
        alert("Material 'Skates C' no encontrado en la lista.");
        return;
    }

    const newItem = {
        id: `item-${Date.now()}-1`,
        description: material.description,
        nameEs: material.nameEs,
        units: 60,
        netWeightUnit: material.netWeight,
        totalWeight: material.netWeight * 60,
        taric: material.taricNumber
    };

    const newPallet = {
        id: `pallet-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        palletNum: getNextPalletNumber(),
        grossWeight: 15,
        netWeight: newItem.totalWeight,
        dimX: 1.00,
        dimY: 1.00,
        dimZ: 1.40,
        bulk: 0,
        stackable: 'NOT',
        unitsPallet: 1,
        items: [newItem]
    };

    calculateBulk(newPallet);
    data.unshift(newPallet);
    lastUsedPalletNumber = newPallet.palletNum;
    renderTable();
}

function addPalletPatineros() {
    const material = materiales.find(m => m.description === "Skates shelves");

    if (!material) {
        alert("Material 'Skates shelves' no encontrado en la lista.");
        return;
    }

    const newItem = {
        id: `item-${Date.now()}-2`,
        description: material.description,
        nameEs: material.nameEs,
        units: 2,
        netWeightUnit: material.netWeight,
        totalWeight: material.netWeight * 2,
        taric: material.taricNumber
    };

    const newPallet = {
        id: `pallet-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        palletNum: getNextPalletNumber(),
        grossWeight: 15,
        netWeight: newItem.totalWeight,
        dimX: 1.60,
        dimY: 0.85,
        dimZ: 0.84,
        bulk: 0,
        stackable: 'NOT',
        unitsPallet: 1,
        items: [newItem]
    };

    calculateBulk(newPallet);
    data.unshift(newPallet);
    lastUsedPalletNumber = newPallet.palletNum;
    renderTable();
}

function addPalletAccesorios() {
    const newPalletNumber = getNextPalletNumber();

    const sharpener = materiales.find(m => m.description === "Sharpener machine");
    const vacuum = materiales.find(m => m.description === "Vacuum");

    if (!sharpener || !vacuum) {
        alert("Alguno de los materiales no se encuentra en la lista.");
        return;
    }

    const newPallet = {
        id: `pallet-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        palletNum: newPalletNumber,
        grossWeight: 15,
        netWeight: 0, // se calcula luego
        dimX: 1.00,
        dimY: 1.00,
        dimZ: 1.50,
        bulk: 0,
        stackable: 'NOT',
        unitsPallet: 1,
        items: [
            {
                id: `item-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
                description: sharpener.description,
                nameEs: sharpener.nameEs,
                units: 1,
                netWeightUnit: sharpener.netWeight,
                totalWeight: sharpener.netWeight,
                taric: sharpener.taricNumber
            },
            {
                id: `item-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
                description: vacuum.description,
                nameEs: vacuum.nameEs,
                units: 1,
                netWeightUnit: vacuum.netWeight,
                totalWeight: vacuum.netWeight,
                taric: vacuum.taricNumber
            }
        ]
    };

    newPallet.netWeight = newPallet.items.reduce((sum, item) => sum + item.totalWeight, 0);
    data.unshift(newPallet);
    lastUsedPalletNumber = newPallet.palletNum;
    renderTable();
}

function addPalletPiesDeValla() {
    const material = materiales.find(m => m.description === "New Barriers Accesory");

    if (!material) {
        alert("Material 'New Barriers Accesory' no encontrado en la lista.");
        return;
    }

    const newItem = {
        id: `item-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        description: material.description,
        nameEs: material.nameEs,
        units: 20,
        netWeightUnit: material.netWeight,
        totalWeight: material.netWeight * 20,
        taric: material.taricNumber
    };

    const newPallet = {
        id: `pallet-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        palletNum: getNextPalletNumber(),
        grossWeight: 15,
        netWeight: newItem.totalWeight,
        dimX: 1.20,
        dimY: 1.10,
        dimZ: 0.80,
        bulk: 0,
        stackable: 'NOT',
        unitsPallet: 1,
        items: [newItem]
    };

    calculateBulk(newPallet);
    data.unshift(newPallet);
    lastUsedPalletNumber = newPallet.palletNum;
    renderTable();
}

function addPalletAlumBarriers() {
    const materialesRequeridos = [
        { desc: "Curved Silver Alum. Barriers", units: 4 },
        { desc: "Special Silver Alum. Barriers", units: 5 },
        { desc: "Straight Silver Alum. Barriers", units: 19 },
        { desc: "Silver Alum. Gate Barriers", units: 1 }
    ];

    const items = materialesRequeridos.map((m, index) => {
        const mat = materiales.find(mat => mat.description === m.desc);
        return {
            id: `item-${Date.now()}-${index}`,
            description: m.desc,
            nameEs: mat?.nameEs || '',
            units: m.units,
            netWeightUnit: mat?.netWeight || 0,
            totalWeight: (mat?.netWeight || 0) * m.units,
            taric: mat?.taricNumber || ''
        };
    });

    const totalNetWeight = items.reduce((sum, item) => sum + item.totalWeight, 0);

    const newPallet = {
        id: `pallet-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        palletNum: getNextPalletNumber(),
        grossWeight: 15,
        netWeight: totalNetWeight,
        dimX: 2.00,
        dimY: 1.20,
        dimZ: 1.70,
        bulk: 0,
        stackable: 'NOT',
        unitsPallet: 1,
        items: items
    };

    calculateBulk(newPallet);
    data.unshift(newPallet);
    lastUsedPalletNumber = newPallet.palletNum;
    renderTable();
}

// ======================
// RENDERIZADO
// ======================

function renderTable() {
    const tbody = document.getElementById('tableBody');
    tbody.querySelectorAll('.dynamic-row').forEach(row => row.remove());

    // 👇 Nuevo bloque para mostrar/ocultar el mensaje
    const emptyMessage = document.getElementById('emptyMessage');
    if (data.length === 0) {
        emptyMessage.style.display = "block";
        return; // No seguimos renderizando si no hay pallets
    } else {
        emptyMessage.style.display = "none";
    }

    [...data].slice().reverse().forEach(pallet => {
        // 1. Fila Pallet
        const palletRow = document.createElement('tr');
        palletRow.className = 'dynamic-row pallet-row';
        palletRow.classList.add(`pallet-group-${pallet.palletNum}`);
        palletRow.dataset.id = pallet.id;
        palletRow.innerHTML = `
            <td><input type="number" value="${pallet.palletNum}" 
                onchange="updatePallet('${pallet.id}', 'palletNum', this.value)"></td>
            <td><input type="number" min="0" max="99" step="0.01" value="${pallet.grossWeight.toFixed(2)}"
                    onchange="updatePallet('${pallet.id}', 'grossWeight', this.value)"></td>
            <td>${pallet.netWeight.toFixed(2)}</td>
            <td><input type="number" value="${pallet.dimX.toFixed(2)}" step="0.01" 
                onchange="updateDimension('${pallet.id}', 'dimX', this.value)"></td>
            <td><input type="number" value="${pallet.dimY.toFixed(2)}" step="0.01" 
                onchange="updateDimension('${pallet.id}', 'dimY', this.value)"></td>
            <td><input type="number" value="${pallet.dimZ.toFixed(2)}" step="0.01" 
                onchange="updateDimension('${pallet.id}', 'dimZ', this.value)"></td>
            <td>${Number(pallet.bulk).toFixed(2)}</td>
            <td>
                <select onchange="updatePallet('${pallet.id}', 'stackable', this.value)">
                    <option ${pallet.stackable === 'YES' ? 'selected' : ''}>YES</option>
                    <option ${pallet.stackable === 'NOT' ? 'selected' : ''}>NOT</option>
                </select>
            </td>
            <td><input type="number" value="${pallet.unitsPallet}" min="1"
                onchange="updatePallet('${pallet.id}', 'unitsPallet', this.value)"></td>
            <td colspan="4" class="empty-header"></td>
            <td><span class="delete-btn" onclick="deleteRow('${pallet.id}')">✕</span></td>
        `;
        tbody.prepend(palletRow);

        // 2. Items del Pallet
        pallet.items.forEach(item => {
            const itemRow = document.createElement('tr');
            itemRow.className = 'dynamic-row item-row';
            itemRow.classList.add(`pallet-group-${pallet.palletNum}`);
            itemRow.dataset.id = item.id;
            itemRow.innerHTML = `
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                <select onchange="updateItem('${item.id}', 'description', this.value)">
                    <option value="">Seleccionar...</option>
                    ${materiales.map(m => `
                    <option value="${m.description}" ${item.description === m.description ? 'selected' : ''}>
                        ${idioma === "ES" ? m.nameEs : m.description}
                    </option>
                    `).join('')}
                </select>
                </td>
                <td><input type="number" value="${item.units}" 
                    onchange="updateItem('${item.id}', 'units', this.value)"></td>
                <td>
                ${idioma === 'EN' 
                ? (item.netWeightUnit * 2.20462).toFixed(2) + ' lb' 
                : item.netWeightUnit.toFixed(2) + ' kg'}
                </td>
                <td>
                ${idioma === 'EN' 
                ? (item.totalWeight * 2.20462).toFixed(2) + ' lb'
                : item.totalWeight.toFixed(2) + ' kg'}
                </td>
                <td>${item.taric}</td>
                <td><span class="delete-btn" onclick="deleteRow('${item.id}')">✕</span></td>
            `;
            tbody.prepend(itemRow);
        });

        // 3. Botón Add Item
        const addButtonRow = document.createElement('tr');
        addButtonRow.className = 'dynamic-row add-item-row';
        addButtonRow.classList.add(`pallet-group-${pallet.palletNum}`);
        addButtonRow.innerHTML = `
            <td colspan="15">
                <button onclick="addItem('${pallet.id}')">➕ Añadir Producto</button>
            </td>
        `;
        tbody.prepend(addButtonRow);
});
}

// ======================
// ACTUALIZACIONES
// ======================

function updatePallet(id, field, value) {
    const pallet = data.find(p => p.id === id);
    if (!pallet) return;

    if (field === 'unitsPallet') {
        value = Math.max(1, parseInt(value) || 1); // Validación mínimo 1
    }

    pallet[field] = ['grossWeight', 'dimX', 'dimY', 'dimZ', 'unitsPallet'].includes(field) 
        ? Number(value) 
        : value;
    if (field === 'grossWeight') {
        value = Math.max(0, Math.min(99, parseFloat(value) || 0));
    }

    calculateBulk(pallet);
    calculateTotals(id);

}

function updateDimension(id, dimension, value) {
    const pallet = data.find(p => p.id === id);
    if (!pallet) return;
    
    pallet[dimension] = Number(value) || 0;
    calculateBulk(pallet);
}

function updateItem(id, field, value) {
    data.forEach(pallet => {
        const item = pallet.items.find(i => i.id === id);
        if (item) {
            if (field === 'description') {
                const material = materiales.find(m => m.description === value);
                item.description = value;
                item.nameEs = material?.nameEs || '';
                item.netWeightUnit = material?.netWeight || 0;
                item.taric = material?.taricNumber || '';
            } else {
                item[field] = Number(value) || 0;
            }

            // Calcular peso total en función del idioma
            let total = item.units * item.netWeightUnit;
            item.totalWeight = Number(total.toFixed(2));

            calculateTotals(pallet.id);
        }
    });
    renderTable();
}

// ======================
// CÁLCULOS
// ======================

function calculateBulk(pallet) {
    if (!pallet) return;
    
    const rawBulk = pallet.dimX * pallet.dimY * pallet.dimZ * pallet.unitsPallet;
    pallet.bulk = Number(rawBulk.toFixed(2)); // Convertir a número
    renderTable();
}

function calculateTotals(palletId) {
    const pallet = data.find(p => p.id === palletId);
    if (!pallet) return;
    
    pallet.netWeight = pallet.items.reduce((sum, item) => sum + item.totalWeight, 0);
    renderTable();
}

// ======================
// PERSISTENCIA
// ======================

function saveData() {
    const saveData = {
        pallets: data,
        lastUsedPalletNumber: lastUsedPalletNumber,
        consignee: document.getElementById("consigneeAddress").value
    };
    const fileName = prompt("Introduce un nombre para guardar este documento:", "miPackingList");
    if (!fileName) return;
    localStorage.setItem(`shippingData-${fileName}`, JSON.stringify(saveData));
    alert(`Datos guardados como '${fileName}' correctamente!`);
}

function loadData() {
    const fileName = prompt("Introduce el nombre del documento que deseas cargar:", "miPackingList");
    if (!fileName) return;
    const savedData = localStorage.getItem(`shippingData-${fileName}`);
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        data = parsedData.pallets;
        lastUsedPalletNumber = parsedData.lastUsedPalletNumber;
        renderTable();
        if (parsedData.consignee) {
            document.getElementById("consigneeAddress").value = parsedData.consignee;
        }
        alert(`Datos '${fileName}' cargados correctamente!`);
    } else {
        alert(`No se encontraron datos con el nombre '${fileName}'`);
    }
}

// ======================
// GENERACIÓN PDF
// ======================

function generatePDF() {
    
    const consigneeTextarea = document.getElementById("consigneeAddress");
    
    let consigneeLines = consigneeTextarea.value.split('\n').slice(0, 5);

    // Rellenar con líneas en blanco si hay menos de 5
    while (consigneeLines.length < 5) {
        consigneeLines.push('');
    }

    // Limitar a máximo 5 líneas
    const trimmedConsigneeLines = consigneeLines.slice(0, 5);

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    
    // SHIPPER block
    doc.setFontSize(10);
    doc.setTextColor(40);
    doc.setFont(undefined, 'bold');
    doc.text('SHIPPER NAME AND ADDRESS', 14, 20);
    doc.setFont(undefined, 'normal');
    doc.setFontSize(9);
    doc.text([
        'EXTRAICE SL',
        'Parque Empresarial Los Llanos',
        'C/Extremadura nº 2',
        '41909 Salteras (Sevilla). SPAIN',
        'Phone: +34 955 110 357',
        'Contact Details: Tono Elias - (+34) 696 48 48 65',
        ' '
    ], 14, 26);
    
    // CONSIGNEE block
    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text('CONSIGNEE NAME AND ADDRESS', 110, 20);
    doc.setFont(undefined, 'normal');
    doc.setFontSize(9);
    doc.setTextColor(0);
    consigneeLines.forEach((line, index) => {
        doc.text(line, 110, 26 + index * 4);
    });
    
    const invoiceNumber = document.getElementById("invoiceNumber").value;
    const invoiceDate = document.getElementById("invoiceDate").value;
    doc.setFont(undefined, 'bold');
    doc.setFontSize(8);
    doc.text(`INVOICE Nº: ${invoiceNumber}`, 14, 50);
    doc.text(`INVOICE DATE: ${invoiceDate}`, 110, 50);

    const weightUnit = idioma === 'EN' ? 'lb' : 'kg';
    const factor = idioma === 'EN' ? 2.20462 : 1;
    let yPos = 48 + consigneeLines.length * 1;
    let totalGross = 0;
    let totalNet = 0;
    let totalBulk = 0;
    let allItems = [];
    let totalCombinedWeight = 0;

    [...data].sort((a, b) => a.palletNum - b.palletNum).forEach(pallet => {
        pallet.items.forEach((item, index) => {
            allItems.push([
                index === 0 ? pallet.palletNum : '',
                idioma === 'ES' ? (item.nameEs || item.description) : item.description,
                '',//STACKABLE vacio en items
                item.units,
                (item.netWeightUnit * factor).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ` ${weightUnit}`,
                (item.totalWeight * factor).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ` ${weightUnit}`,
                item.taric,
                {
                    raw: pallet.palletNum,
                    content: ''
                }
            ]);
        });
 
        // Insertar la fila TOTAL justo después de los ítems del pallet con las medidas en una columna separada
        allItems.push([
            '',
            `TOTAL PALLET nº ${pallet.palletNum}`,
            pallet.stackable || '',
            `${pallet.dimX.toFixed(2)}x${pallet.dimY.toFixed(2)}x${pallet.dimZ.toFixed(2)} m`,
            '',
            (pallet.netWeight * factor).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ` ${weightUnit}`,
            (pallet.grossWeight * factor).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ` ${weightUnit}`,
            {
                raw: pallet.palletNum,
                content: ((pallet.netWeight + pallet.grossWeight) * factor).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ` ${weightUnit}`
            }
        ]);
 
        totalGross += pallet.grossWeight;
        totalNet += pallet.netWeight;
        totalBulk += pallet.bulk;
        totalCombinedWeight += pallet.grossWeight + pallet.netWeight;
    });
    let lastPallet = null;
    let groupColor = null;
    doc.autoTable({
        startY: yPos,
        head: [['Pallet Nº', 'Description','Stackable', 'Units/Medidas', 'Net/Unit', 'Total Neto', 'Taric/Peso Pallet', 'Total Bruto']],
        body: allItems,
        theme: 'grid',
        styles: { fontSize: 6, cellPadding: 1.2 },
        headStyles: {
            fillColor: [41, 128, 185],
            textColor: 255,
            fontStyle: 'bold',
            minCellHeight: 6
        },
        columnStyles: {
            0: {},
            1: {},
            2: {}, // Stackable
            3: {},
            4: {},
            5: {},
            6: {},
            7: {}  // Nueva columna final
        },
        useCss: true,
        didParseCell: function (data) {
            if (data.section !== 'body') return;
            if (typeof data.row.raw[1] === 'string' && data.row.raw[1].includes('TOTAL PALLET')) {
                data.cell.styles.fillColor = [230, 240, 255]; // azul claro sutil
                data.cell.styles.fontStyle = 'bold';
            }
 
            let currentPallet = null;
            try {
                const palletCell = data.row.raw[7];
                if (palletCell && typeof palletCell === 'object' && 'raw' in palletCell) {
                    currentPallet = palletCell.raw;
                } else if (typeof palletCell === 'string' && palletCell.includes('|')) {
                    currentPallet = palletCell.split('|')[1];
                } else {
                    currentPallet = palletCell;
                }
            } catch (e) {
                currentPallet = null;
            }
 
            const rowIndex = data.row.index;
 
            let prevPallet = rowIndex > 0 ? allItems[rowIndex - 1][7] : null;
            let nextPallet = rowIndex < allItems.length - 1 ? allItems[rowIndex + 1][7] : null;

            if (prevPallet && typeof prevPallet === 'object') prevPallet = prevPallet.raw;
            if (nextPallet && typeof nextPallet === 'object') nextPallet = nextPallet.raw;
 
            data.cell.styles.lineColor = [0, 112, 192];
            data.cell.styles.lineWidth = { top: 0, bottom: 0, left: 0, right: 0 };
 
            if (rowIndex === 0 || prevPallet !== currentPallet) {
                data.cell.styles.lineWidth.top = 0.5;
            }
            if (rowIndex === allItems.length - 1 || nextPallet !== currentPallet) {
                data.cell.styles.lineWidth.bottom = 0.5;
            }
            if (data.column.index === 0) {
                data.cell.styles.lineWidth.left = 0.5;
            }
            if (data.column.index === data.table.columns.length - 1) {
                data.cell.styles.lineWidth.right = 0.5;
            }
        },
        didDrawPage: function (data) {
            const pageCount = doc.internal.getNumberOfPages();
            doc.setFontSize(8);
            doc.text(`Page ${doc.internal.getCurrentPageInfo().pageNumber} of ${pageCount}`, 195, 290, { align: 'right' });
        }
    });
    yPos = doc.lastAutoTable.finalY + 5;

    doc.autoTable({
        startY: yPos,
        head: [['Nº Pallets', 'Total Neto', 'Total Bruto', 'Volumen Total (m³)']],
        body: [[
            data.length.toString(),
            `${(totalNet * factor).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${weightUnit}`,
            `${((totalNet + totalGross) * factor).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${weightUnit}`,
            `${totalBulk.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} m3`
        ]],
        theme: 'grid',
        styles: {
            fontSize: 9,
            halign: 'center',
            cellPadding: 2,
            textColor: [40, 40, 40],
            fillColor: [240, 240, 255]
        },
        headStyles: {
            fillColor: [200, 220, 255],
            halign: 'center',
            textColor: 40,
            fontStyle: 'bold'
        },
        columnStyles: {
            0: { halign: 'center' },
            1: { halign: 'center' },
            2: { halign: 'center' },
            3: { halign: 'center' }
        }
    });
    yPos = doc.lastAutoTable.finalY + 5;

    
    doc.save('packing-list.pdf');
}

// Inicialización
window.renderTable = renderTable;
window.onload = renderTable;

// Limitar la dirección del consignatario a exactamente 5 líneas
document.getElementById("consigneeAddress").addEventListener("input", function () {
    const lines = this.value.split('\n');

    if (lines.length > 5) {
        this.value = lines.slice(0, 5).join('\n');
        alert("⚠️ Solo se permiten exactamente 5 líneas en la dirección del consignatario.");
    }
});

function resetScreen() {
    if (confirm("¿Estás seguro de que deseas borrar todos los datos y empezar desde cero?")) {
        data = [];
        lastUsedPalletNumber = 0;
        document.getElementById("consigneeAddress").value = "";
        document.getElementById("invoiceNumber").value = "";
        document.getElementById("invoiceDate").value = "";
        renderTable();
    }
}


function exportToFile() {
    const fileName = prompt("Introduce un nombre para el archivo:", "packing-list");
    if (!fileName) return;

    const saveData = {
        pallets: data,
        lastUsedPalletNumber: lastUsedPalletNumber,
        consignee: document.getElementById("consigneeAddress").value,
        invoiceNumber: document.getElementById("invoiceNumber")?.value || '',
        invoiceDate: document.getElementById("invoiceDate")?.value || ''
    };

    const jsonStr = JSON.stringify(saveData, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function importFromFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const content = e.target.result;
        try {
            const importedData = JSON.parse(content);
            data = importedData.pallets || [];
            lastUsedPalletNumber = importedData.lastUsedPalletNumber || 0;
            if (importedData.consignee) document.getElementById("consigneeAddress").value = importedData.consignee;
            if (importedData.invoiceNumber) document.getElementById("invoiceNumber").value = importedData.invoiceNumber;
            if (importedData.invoiceDate) document.getElementById("invoiceDate").value = importedData.invoiceDate;
            renderTable();
            alert("Archivo cargado correctamente.");
        } catch (err) {
            alert("Error al importar el archivo. ¿Es un archivo válido?");
        }
    };
    reader.readAsText(file);
}