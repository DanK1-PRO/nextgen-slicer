/* =========================================
   NEXTGEN SLICER
   Runtime Demo System
========================================= */

console.clear();

/* =========================================
   DOM REFERENCES
========================================= */

const DOM = {
  body: document.body,
  appRoot: document.getElementById("app"),
  landscapeShell:
    document.getElementById("landscapeShell"),
  landscapeShellInner:
    document.getElementById("landscapeShellInner"),
  rotateDeviceOverlay:
    document.getElementById("rotateDeviceOverlay"),
  viewerFullscreenLayer:
    document.getElementById("viewerFullscreenLayer"),
  bootLoader: document.getElementById("bootLoader"),
  bootLoaderStatus:
    document.getElementById("bootLoaderStatus"),
  bootLoaderProgress:
    document.getElementById("bootLoaderProgress"),
  bootLoaderStepLabel:
    document.getElementById("bootLoaderStepLabel"),
  bootLoaderHint:
    document.getElementById("bootLoaderHint"),
  nav: document.querySelector(".nav"),
  navItems:
    Array.from(document.querySelectorAll(".nav-item")),
  panels:
    Array.from(document.querySelectorAll(".panel")),
  runtimeMode: document.getElementById("runtimeMode"),
  runtimeStateText: document.getElementById("runtimeStateText"),
  viewerPanel: document.getElementById("viewerPanel"),
  viewerCore: document.getElementById("viewerCore"),
  viewerCanvas: document.getElementById("viewerCanvas"),
  viewerFullscreenButton:
    document.getElementById("viewerFullscreenButton"),
  viewerState: document.getElementById("viewerState"),
  aiConfidence: document.getElementById("aiConfidence"),
  audioControl:
    document.getElementById("audioControl"),
  audioToggleButton:
    document.getElementById("audioToggleButton"),
  audioToggleIcon:
    document.getElementById("audioToggleIcon"),
  audioToggleText:
    document.getElementById("audioToggleText"),
  audioVolumeControl:
    document.getElementById("audioVolumeControl"),
  nozzleTemp: document.getElementById("nozzleTemp"),
  bedTemp: document.getElementById("bedTemp"),
  printSpeed: document.getElementById("printSpeed"),
  vibrationValue: document.getElementById("vibrationValue"),
  nozzleTrend: document.getElementById("nozzleTrend"),
  bedTrend: document.getElementById("bedTrend"),
  speedTrend: document.getElementById("speedTrend"),
  vibrationTrend: document.getElementById("vibrationTrend"),
  speedValue: document.getElementById("speedValue"),
  flowValue: document.getElementById("flowValue"),
  speedControl: document.getElementById("speedControl"),
  flowControl: document.getElementById("flowControl"),
  terminalOutput: document.getElementById("terminalOutput"),
  aiChat: document.getElementById("aiChat"),
  aiInput: document.getElementById("aiInput"),
  aiSendButton: document.getElementById("aiSendButton"),
  modelList: document.getElementById("modelList"),
  presetGrid:
    document.getElementById("presetGrid") ||
    document.querySelector(".preset-grid"),
  layerHeightControl: document.getElementById("layerHeightControl"),
  layerHeightValue: document.getElementById("layerHeightValue"),
  infillControl: document.getElementById("infillControl"),
  infillValue: document.getElementById("infillValue"),
  nozzleControl: document.getElementById("nozzleControl"),
  nozzleControlValue: document.getElementById("nozzleControlValue"),
  supportToggle: document.getElementById("supportToggle"),
  aiOptimizationToggle: document.getElementById("aiOptimizationToggle"),
  stageRail: document.getElementById("stageRail"),
  jobProgressBar: document.getElementById("jobProgressBar"),
  jobProgressPercent: document.getElementById("jobProgressPercent"),
  jobStatusText: document.getElementById("jobStatusText"),
  layerProgressText: document.getElementById("layerProgressText"),
  timeRemainingText: document.getElementById("timeRemainingText"),
  currentCommandText: document.getElementById("currentCommandText"),
  safetyGateStatus: document.getElementById("safetyGateStatus"),
  safetyGateDetail: document.getElementById("safetyGateDetail"),
  correctionSummary: document.getElementById("correctionSummary"),
  startPrintButton: document.getElementById("startPrintButton"),
  pausePrintButton: document.getElementById("pausePrintButton"),
  stopPrintButton: document.getElementById("stopPrintButton"),
  defectButtons: document.getElementById("defectButtons"),
  evidenceFrameId: document.getElementById("evidenceFrameId"),
  evidenceTimestamp: document.getElementById("evidenceTimestamp"),
  viewerMachineLabel:
    document.getElementById("viewerMachineLabel"),
  viewerProfileLabel:
    document.getElementById("viewerProfileLabel"),
  viewerSupportLabel:
    document.getElementById("viewerSupportLabel"),
  viewerModelGhost:
    document.getElementById("viewerModelGhost"),
  viewerPrepareHint:
    document.getElementById("viewerPrepareHint"),
  viewerLayerStack:
    document.getElementById("viewerLayerStack"),
  viewerPathSweep:
    document.getElementById("viewerPathSweep"),
  viewerLayerFill:
    document.getElementById("viewerLayerFill"),
  viewerPreviewLayerValue:
    document.getElementById("viewerPreviewLayerValue"),
  viewerPathFill:
    document.getElementById("viewerPathFill"),
  viewerPreviewPathValue:
    document.getElementById("viewerPreviewPathValue"),
  viewerInspectorStage:
    document.getElementById("viewerInspectorStage"),
  viewerInspectorModel:
    document.getElementById("viewerInspectorModel"),
  viewerInspectorLayer:
    document.getElementById("viewerInspectorLayer"),
  viewerInspectorRisk:
    document.getElementById("viewerInspectorRisk"),
  viewerInspectorEta:
    document.getElementById("viewerInspectorEta"),
  viewerInspectorSupport:
    document.getElementById("viewerInspectorSupport"),
  viewerStageHint:
    document.getElementById("viewerStageHint"),
  viewerActionHint:
    document.getElementById("viewerActionHint"),
  viewerMonitorHint:
    document.getElementById("viewerMonitorHint"),
  viewerMonitorMode:
    document.getElementById("viewerMonitorMode"),
  viewerMonitorModeButtons:
    Array.from(
      document.querySelectorAll("[data-monitor-view]")
    ),
  viewer3DBuild:
    document.getElementById("viewer3DBuild"),
  viewer3DNozzle:
    document.getElementById("viewer3DNozzle"),
  alertsFeed:
    document.getElementById("alertsFeed") ||
    document.querySelector(".alerts-feed")
};

const AssetRegistry =
  window.__NEXTGEN_ASSETS__ || {
    icons: {
      soundOn: "./assets/icons/sound-on.svg",
      soundOff: "./assets/icons/sound-off.svg"
    },
    ui: {
      bootGrid: "./assets/ui/boot-grid.svg"
    },
    sounds: {}
  };

/* =========================================
   STATIC DATA
========================================= */

const MODEL_LIBRARY = [
  {
    id: "turbine-housing",
    name: "Турбинный корпус NX-14",
    meta: "Жаростойкий нейлон • 6 ч 24 мин",
    preview: "NX"
  },
  {
    id: "robot-gripper",
    name: "Захват манипулятора M-7",
    meta: "CF-PETG • 4 ч 18 мин",
    preview: "M7"
  },
  {
    id: "cooling-duct",
    name: "Канал охлаждения Vortex",
    meta: "ABS • 2 ч 46 мин",
    preview: "VX"
  },
  {
    id: "sensor-bracket",
    name: "Кронштейн датчика Delta",
    meta: "ASA • 1 ч 52 мин",
    preview: "DL"
  },
  {
    id: "precision-jig",
    name: "Калибровочный кондуктор P-9",
    meta: "PLA Pro • 3 ч 31 мин",
    preview: "P9"
  }
];

const VIEWER_MODEL_PROFILES = {
  "turbine-housing": {
    kind: "impeller",
    heightMm: 142,
    radiusX: 34,
    radiusY: 34,
    lobes: 6,
    twist: 0.58,
    complexity: 1.18,
    supportBias: 0.16
  },
  "robot-gripper": {
    kind: "bracket",
    heightMm: 92,
    radiusX: 46,
    radiusY: 34,
    lobes: 3,
    twist: 0.18,
    complexity: 1.02,
    supportBias: 0.24
  },
  "cooling-duct": {
    kind: "duct",
    heightMm: 74,
    radiusX: 52,
    radiusY: 30,
    lobes: 2,
    twist: 0.34,
    complexity: 0.92,
    supportBias: 0.12
  },
  "sensor-bracket": {
    kind: "manifold",
    heightMm: 86,
    radiusX: 30,
    radiusY: 38,
    lobes: 5,
    twist: 0.42,
    complexity: 1.06,
    supportBias: 0.2
  },
  "precision-jig": {
    kind: "vase",
    heightMm: 168,
    radiusX: 28,
    radiusY: 28,
    lobes: 4,
    twist: 0.84,
    complexity: 1.22,
    supportBias: 0.08
  }
};

const NAVIGATION_LIBRARY = [
  {
    id: "monitoring",
    focusPanelId: "viewerPanel",
    stage: "monitor"
  },
  {
    id: "ai",
    focusPanelId: "aiPanel",
    stage: "monitor"
  },
  {
    id: "print",
    focusPanelId: "controlsPanel",
    stage: "monitor"
  },
  {
    id: "telemetry",
    focusPanelId: "telemetryPanel",
    stage: "monitor"
  },
  {
    id: "slicing",
    focusPanelId: "slicerPanel",
    stage: "prepare"
  },
  {
    id: "profiles",
    focusPanelId: "modelsPanel",
    stage: "prepare"
  },
  {
    id: "projects",
    focusPanelId: "alertsPanel",
    stage: "preview"
  }
];

const PRESET_LIBRARY = [
  {
    id: "quality",
    name: "Точность",
    meta: "Минимум колебаний",
    printSpeed: 84,
    flowRate: 98,
    layerHeight: 0.16,
    infillDensity: 22,
    nozzleTemp: 212
  },
  {
    id: "balanced",
    name: "Баланс",
    meta: "Стабильная серийная печать",
    printSpeed: 120,
    flowRate: 100,
    layerHeight: 0.2,
    infillDensity: 18,
    nozzleTemp: 215
  },
  {
    id: "speed",
    name: "Производительность",
    meta: "Максимум пропускной способности",
    printSpeed: 184,
    flowRate: 104,
    layerHeight: 0.24,
    infillDensity: 14,
    nozzleTemp: 220
  }
];

const STAGE_LIBRARY = [
  {
    id: "prepare",
    label: "Подготовка"
  },
  {
    id: "preview",
    label: "Предпросмотр"
  },
  {
    id: "monitor",
    label: "Мониторинг"
  }
];

const DEFECT_LIBRARY = [
  {
    id: "spaghetti",
    label: "Спагетти",
    severity: 0.74,
    runtime: "critical"
  },
  {
    id: "underextrusion",
    label: "Недоэкструзия",
    severity: 0.42,
    runtime: "warning"
  },
  {
    id: "layer-shift",
    label: "Сдвиг слоя",
    severity: 0.66,
    runtime: "critical"
  },
  {
    id: "blobbing",
    label: "Наплывы",
    severity: 0.33,
    runtime: "warning"
  },
  {
    id: "warping",
    label: "Отрыв края",
    severity: 0.55,
    runtime: "warning"
  },
  {
    id: "stringing",
    label: "Нити",
    severity: 0.28,
    runtime: "warning"
  }
];

const MOCK_GCODE_STREAM = [
  "G28 ; home all axes",
  "M104 S215",
  "M140 S60",
  "G1 X84.3 Y112.1 Z0.24 F3600",
  "G1 X102.4 Y118.7 E4.118 F1800",
  "G1 X124.8 Y118.7 E6.404 F1800",
  "G1 X124.8 Y145.6 E9.012 F1800",
  "G1 X98.7 Y145.6 E11.781 F1800",
  "G1 X86.5 Y130.2 E13.411 F1800",
  "G1 X86.5 Y104.4 E15.908 F1800"
];

const STATE_LABELS = {
  stable: {
    runtimeMode: "ПЕЧАТЬ АКТИВНА",
    runtimeStateText: "СИСТЕМА СТАБИЛЬНА",
    viewerStatus: "СТАБИЛЬНЫЙ ПОТОК",
    printStatus: "ПЕЧАТЬ АКТИВНА"
  },
  warning: {
    runtimeMode: "КОРРЕКЦИЯ ТРАЕКТОРИИ",
    runtimeStateText: "ПОВЫШЕННЫЙ РИСК",
    viewerStatus: "КОМПЕНСАЦИЯ ВИБРАЦИИ",
    printStatus: "КОРРЕКЦИЯ ТРАЕКТОРИИ"
  },
  critical: {
    runtimeMode: "ЭКСТРЕННАЯ СТАБИЛИЗАЦИЯ",
    runtimeStateText: "КРИТИЧЕСКИЙ РЕЖИМ",
    viewerStatus: "ТЕРМОЗАЩИТА АКТИВНА",
    printStatus: "ТЕРМОЗАЩИТА АКТИВНА"
  },
  recovering: {
    runtimeMode: "ВОССТАНОВЛЕНИЕ РЕЖИМА",
    runtimeStateText: "ВОССТАНОВЛЕНИЕ",
    viewerStatus: "СТАБИЛИЗАЦИЯ",
    printStatus: "СТАБИЛИЗАЦИЯ"
  }
};

const TERMINAL_MESSAGES = {
  stable: [
    "Контур подачи материала стабилен.",
    "Матрица движения подтверждает равномерную подачу.",
    "Диагностика завершена без отклонений.",
    "AI-слой удерживает оптимальный профиль печати."
  ],
  warning: [
    "Зафиксирован рост вибрации по оси Y.",
    "Активирована компенсация ускорения на внешнем контуре.",
    "Требуется контроль скорости на следующем цикле."
  ],
  critical: [
    "Температурный порог превышен. Запущена термозащита.",
    "Система ограничивает подачу и стабилизирует сопло.",
    "Приоритет переключен на аварийное охлаждение."
  ],
  recovering: [
    "Параметры возвращаются в допуск.",
    "Контур стабилизации снижает остаточные колебания.",
    "Восстановительный цикл выполняется по графику."
  ]
};

const AI_RESPONSES = {
  stable: [
    "Система работает в оптимальном режиме. Телеметрия стабильна.",
    "Профиль печати согласован. Резервы по температуре и потоку достаточны.",
    "Анализ слоя завершен. Вероятность дефекта остается ниже 4%."
  ],
  warning: [
    "Обнаружено повышение вибрации. Рекомендуется снижение скорости на 12%.",
    "Контур движения компенсирует рост амплитуды. Контролируйте скорость внешней стенки.",
    "Зафиксирован динамический дрейф. Перехожу к мягкой коррекции подачи."
  ],
  critical: [
    "Активирована экстренная стабилизация температуры. Подача ограничена до безопасного окна.",
    "Риск перегрева сопла превысил порог. Приоритет смещен на охлаждение и удержание геометрии.",
    "Критический режим подтвержден. Временно блокирую агрессивные ускорения."
  ],
  recovery: [
    "Стабильность восстановлена. Продолжаю мониторинг остаточных колебаний.",
    "Параметры возвращены в рабочий диапазон. Рекомендую удерживать текущий профиль.",
    "Контур восстановления завершает компенсацию. Переход к штатному режиму подготовлен."
  ],
  preset_applied: [
    "Профиль обновлен. Пересчитываю скорость, поток и тепловой резерв.",
    "Новый пресет применен. Адаптивная компенсация перестраивает окно стабильности.",
    "Параметры материала подтверждены. Запускаю повторную оценку рисков."
  ],
  model_loaded: [
    "Геометрия принята. Провожу быструю оценку термических мостов и опор.",
    "Модель синхронизирована с runtime. Оптимизирую траектории для текущего профиля.",
    "Загрузка завершена. AI-слой обновил приоритеты по качеству поверхности."
  ],
  user_guidance: [
    "Для ускорения цикла можно поднять поток на 2-3%, сохранив текущую температуру.",
    "Если приоритетом является качество, удерживайте скорость ниже 140 мм/с.",
    "При текущей геометрии критична стабильность внешнего контура. Не увеличивайте ускорение резко."
  ]
};

/* =========================================
   APPLICATION STATE
========================================= */

const RuntimeState = {
  currentStage: "prepare",
  currentNav: "slicing",
  focusPanelId: "slicerPanel",
  runtime: "stable",
  progress: 18,
  nozzleTemp: 215,
  bedTemp: 60,
  printSpeed: 120,
  vibration: 0.12,
  flowRate: 100,
  aiConfidence: 98,
  printStatus: STATE_LABELS.stable.printStatus,
  viewerStatus: STATE_LABELS.stable.viewerStatus,
  aiMessages: [],
  timestamps: {
    started: Date.now()
  },
  locks: {
    recovery: false,
    critical: false
  },
  metrics: {
    frameTime: 0,
    runtimeTicks: 0
  },
  jobLifecycle: "idle",
  monitorViewMode: "3d",
  isPrinting: false,
  isPaused: false,
  viewerCameraTilt: 60,
  viewerCameraSpin: -22,
  viewerCameraZoom: 1,
  currentLayer: 142,
  totalLayers: 856,
  timeRemainingMinutes: 196,
  currentCommand: MOCK_GCODE_STREAM[0],
  terminalFeed: [],
  alerts: [],
  selectedModelId: MODEL_LIBRARY[0].id,
  modelLoading: false,
  selectedPresetId: "balanced",
  layerHeight: 0.2,
  infillDensity: 18,
  aiOptimizationEnabled: true,
  supportsEnabled: true,
  activeDefectId: "none",
  defectSeverity: 0,
  nozzleTelemetry: {
    x: 0,
    y: -96,
    z: 0,
    speed: 0,
    directionChange: 0,
    zLift: 0,
    extrusionActive: false,
    segmentType: "idle",
    segmentIndex: -1,
    timestamp: 0
  },
  safetyGate: {
    status: "ОЖИДАНИЕ",
    detail: "Нет активных корректирующих команд.",
    pendingCorrection: null,
    appliedCorrection: null
  }
};

const ViewerPointerState = {
  active: false,
  x: 0,
  y: 0
};

const ViewerRenderCache = {
  geometryKey: "",
  geometry: null
};

/* =========================================
   UTILS
========================================= */

function randomBetween(min, max) {
  return (Math.random() * (max - min)) + min;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

const ViewportShellState = {
  designWidth: 1366,
  designHeight: 920,
  activeMode: "desktop",
  listenersBound: false,
  frameRequested: false
};

const ViewerFullscreenState = {
  detached: false,
  originalParent: null,
  originalNextSibling: null
};

function detectViewportMode() {
  const visualViewportRef =
    window.visualViewport || window;
  const viewportWidth =
    visualViewportRef.width || window.innerWidth;
  const viewportHeight =
    visualViewportRef.height || window.innerHeight;
  const isCoarsePointer = window.matchMedia(
    "(pointer: coarse)"
  ).matches;
  const isLandscape =
    viewportWidth >= viewportHeight;
  const shortestSide = Math.min(
    viewportWidth,
    viewportHeight
  );

  const shouldUseMobileShell =
    isCoarsePointer && shortestSide <= 900;

  if (!shouldUseMobileShell) {
    return "desktop";
  }

  return isLandscape
    ? "mobile-landscape"
    : "mobile-portrait";
}

function isDetachedViewerFullscreen() {
  return ViewerFullscreenState.detached;
}

function enterDetachedViewerFullscreen() {
  if (
    !DOM.viewerPanel ||
    !DOM.viewerFullscreenLayer ||
    ViewerFullscreenState.detached
  ) {
    return;
  }

  ViewerFullscreenState.originalParent =
    DOM.viewerPanel.parentNode;
  ViewerFullscreenState.originalNextSibling =
    DOM.viewerPanel.nextSibling;

  DOM.viewerFullscreenLayer.appendChild(
    DOM.viewerPanel
  );
  DOM.viewerFullscreenLayer.setAttribute(
    "aria-hidden",
    "false"
  );

  DOM.body.classList.add("viewer-expanded");
  ViewerFullscreenState.detached = true;
  syncViewerFullscreenButton();
  scheduleViewportModeUpdate();
  RuntimeEvents.emit("ui:render", {});
}

function exitDetachedViewerFullscreen() {
  if (
    !DOM.viewerPanel ||
    !ViewerFullscreenState.detached ||
    !ViewerFullscreenState.originalParent
  ) {
    return;
  }

  if (ViewerFullscreenState.originalNextSibling) {
    ViewerFullscreenState.originalParent.insertBefore(
      DOM.viewerPanel,
      ViewerFullscreenState.originalNextSibling
    );
  } else {
    ViewerFullscreenState.originalParent.appendChild(
      DOM.viewerPanel
    );
  }

  DOM.body.classList.remove("viewer-expanded");

  if (DOM.viewerFullscreenLayer) {
    DOM.viewerFullscreenLayer.setAttribute(
      "aria-hidden",
      "true"
    );
  }

  ViewerFullscreenState.detached = false;
  ViewerFullscreenState.originalParent = null;
  ViewerFullscreenState.originalNextSibling =
    null;
  syncViewerFullscreenButton();
  scheduleViewportModeUpdate();
  RuntimeEvents.emit("ui:render", {});
}

function applyMobileLandscapeScale() {
  ViewportShellState.designWidth = 1366;
  ViewportShellState.designHeight = 920;

  const visualViewportRef =
    window.visualViewport || window;
  const viewportWidth =
    visualViewportRef.width || window.innerWidth;
  const viewportHeight =
    visualViewportRef.height ||
    window.innerHeight;

  let safeInsetX = 0;
  let safeInsetY = 0;

  if (DOM.landscapeShell) {
    const shellStyles =
      window.getComputedStyle(DOM.landscapeShell);
    safeInsetX =
      parseFloat(shellStyles.paddingLeft || "0") +
      parseFloat(shellStyles.paddingRight || "0");
    safeInsetY =
      parseFloat(shellStyles.paddingTop || "0") +
      parseFloat(shellStyles.paddingBottom || "0");
  }

  const availableWidth = Math.max(
    1,
    viewportWidth - safeInsetX
  );
  const availableHeight = Math.max(
    1,
    viewportHeight - safeInsetY
  );

  const scale = clamp(
    Math.min(
      availableWidth /
        ViewportShellState.designWidth,
      availableHeight /
        ViewportShellState.designHeight
    ) * 0.985,
    0.1,
    1
  );

  document.documentElement.style.setProperty(
    "--app-design-width",
    String(ViewportShellState.designWidth) + "px"
  );
  document.documentElement.style.setProperty(
    "--app-design-height",
    String(ViewportShellState.designHeight) + "px"
  );
  document.documentElement.style.setProperty(
    "--mobile-scale",
    String(scale)
  );
  document.documentElement.style.setProperty(
    "--mobile-shell-width",
    String(
      Math.round(
        ViewportShellState.designWidth * scale
      )
    ) + "px"
  );
  document.documentElement.style.setProperty(
    "--mobile-shell-height",
    String(
      Math.round(
        ViewportShellState.designHeight * scale
      )
    ) + "px"
  );
}

function updateViewportMode() {
  const nextMode = detectViewportMode();

  if (
    nextMode !== "mobile-landscape" &&
    ViewerFullscreenState.detached
  ) {
    exitDetachedViewerFullscreen();
  }

  if (nextMode === "mobile-landscape") {
    applyMobileLandscapeScale();
  } else {
    document.documentElement.style.setProperty(
      "--mobile-scale",
      "1"
    );
    document.documentElement.style.setProperty(
      "--mobile-shell-width",
      "100%"
    );
    document.documentElement.style.setProperty(
      "--mobile-shell-height",
      "100%"
    );
  }

  if (DOM.body) {
    DOM.body.dataset.viewportMode = nextMode;
  }

  if (DOM.rotateDeviceOverlay) {
    DOM.rotateDeviceOverlay.setAttribute(
      "aria-hidden",
      String(nextMode !== "mobile-portrait")
    );
  }

  ViewportShellState.activeMode = nextMode;
  RuntimeEvents.emit("ui:render", {});
}

function scheduleViewportModeUpdate() {
  if (ViewportShellState.frameRequested) {
    return;
  }

  ViewportShellState.frameRequested = true;

  window.requestAnimationFrame(
    function onViewportShellFrame() {
      ViewportShellState.frameRequested = false;
      updateViewportMode();
    }
  );
}

function initializeViewportShell() {
  if (ViewportShellState.listenersBound) {
    scheduleViewportModeUpdate();
    return;
  }

  ViewportShellState.listenersBound = true;
  scheduleViewportModeUpdate();

  window.addEventListener(
    "resize",
    scheduleViewportModeUpdate
  );
  window.addEventListener(
    "orientationchange",
    scheduleViewportModeUpdate
  );

  if (window.visualViewport) {
    window.visualViewport.addEventListener(
      "resize",
      scheduleViewportModeUpdate
    );
    window.visualViewport.addEventListener(
      "scroll",
      scheduleViewportModeUpdate
    );
  }
}

function nowTime() {
  return new Date().toLocaleTimeString(
    "ru-RU",
    {
      hour: "2-digit",
      minute: "2-digit"
    }
  );
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function pickRandom(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return "";
  }

  return list[
    Math.floor(Math.random() * list.length)
  ];
}

function degToRad(value) {
  return (value * Math.PI) / 180;
}

function lerp(start, end, ratio) {
  return start + ((end - start) * ratio);
}

function rotate2D(point, angle) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);

  return {
    x: (point.x * cos) - (point.y * sin),
    y: (point.x * sin) + (point.y * cos)
  };
}

function getPolygonCentroid(points) {
  if (!points || points.length === 0) {
    return { x: 0, y: 0 };
  }

  const sum = points.reduce(
    function reducePoint(acc, point) {
      acc.x += point.x;
      acc.y += point.y;
      return acc;
    },
    { x: 0, y: 0 }
  );

  return {
    x: sum.x / points.length,
    y: sum.y / points.length
  };
}

function scalePolygon(points, scale) {
  const centroid = getPolygonCentroid(points);

  return points.map(function mapPoint(point) {
    return {
      x: centroid.x + ((point.x - centroid.x) * scale),
      y: centroid.y + ((point.y - centroid.y) * scale)
    };
  });
}

function segmentLength(a, b) {
  return Math.hypot(
    b.x - a.x,
    b.y - a.y,
    (b.z || 0) - (a.z || 0)
  );
}

function polylineLength(points) {
  if (!points || points.length < 2) {
    return 0;
  }

  let total = 0;
  for (let index = 1; index < points.length; index += 1) {
    total += segmentLength(
      points[index - 1],
      points[index]
    );
  }

  return total;
}

function buildClosedPath(points, z) {
  return points
    .map(function mapPoint(point) {
      return {
        x: point.x,
        y: point.y,
        z
      };
    })
    .concat([
      {
        x: points[0].x,
        y: points[0].y,
        z
      }
    ]);
}

function buildViewerOutline(profile, layerRatio) {
  const segments = 40;
  const twist =
    profile.twist * Math.PI * 2 * layerRatio;
  const points = [];

  for (let index = 0; index < segments; index += 1) {
    const angle =
      ((Math.PI * 2) / segments) * index;
    let radiusX = profile.radiusX;
    let radiusY = profile.radiusY;
    let point;

    if (profile.kind === "impeller") {
      const ripple =
        1 +
        (Math.sin((angle * profile.lobes) + twist) * 0.18) +
        (Math.cos((angle * profile.lobes * 2) - twist) * 0.05);
      point = {
        x: Math.cos(angle) * radiusX * ripple,
        y: Math.sin(angle) * radiusY * ripple
      };
    } else if (profile.kind === "duct") {
      const ripple =
        1 +
        (Math.sin((angle * 2) + twist) * 0.16);
      point = {
        x:
          (Math.cos(angle) * radiusX * ripple) +
          (Math.sin(angle * 2.4) * 8),
        y:
          (Math.sin(angle) * radiusY * 0.9) +
          (Math.cos(angle * 1.5) * 6)
      };
    } else if (profile.kind === "manifold") {
      const ripple =
        1 +
        (Math.sin((angle * 5) + twist) * 0.12);
      point = {
        x: Math.cos(angle) * radiusX * ripple,
        y:
          Math.sin(angle) * radiusY * ripple *
          (0.84 + (Math.cos(angle * 3) * 0.12))
      };
    } else if (profile.kind === "vase") {
      const waist =
        0.66 +
        (Math.sin(layerRatio * Math.PI) * 0.34);
      const ripple =
        1 +
        (Math.sin((angle * 4) + twist) * 0.06);
      point = {
        x: Math.cos(angle) * radiusX * waist * ripple,
        y: Math.sin(angle) * radiusY * waist * ripple
      };
    } else {
      const corners = [
        { x: -radiusX, y: -radiusY * 0.86 },
        { x: radiusX * 0.54, y: -radiusY * 0.86 },
        { x: radiusX * 0.54, y: -radiusY * 0.42 },
        { x: radiusX, y: -radiusY * 0.42 },
        { x: radiusX, y: radiusY },
        { x: -radiusX, y: radiusY }
      ];
      const ratio =
        index / segments;
      const cursor =
        ratio * corners.length;
      const from =
        corners[Math.floor(cursor) % corners.length];
      const to =
        corners[(Math.floor(cursor) + 1) % corners.length];
      const localRatio =
        cursor - Math.floor(cursor);
      point = {
        x: lerp(from.x, to.x, localRatio),
        y: lerp(from.y, to.y, localRatio)
      };
      point = rotate2D(point, twist * 0.18);
    }

    points.push(point);
  }

  return points;
}

function buildScanSegments(points, angle, spacing) {
  const rotated = points.map(function mapPoint(point) {
    return rotate2D(point, -angle);
  });
  const intersections = [];
  const minY = Math.min.apply(
    null,
    rotated.map(function mapY(point) {
      return point.y;
    })
  );
  const maxY = Math.max.apply(
    null,
    rotated.map(function mapY(point) {
      return point.y;
    })
  );
  const segments = [];

  for (let y = minY + spacing; y < maxY; y += spacing) {
    intersections.length = 0;

    for (let index = 0; index < rotated.length; index += 1) {
      const current = rotated[index];
      const next =
        rotated[(index + 1) % rotated.length];

      if (
        (current.y <= y && next.y > y) ||
        (current.y > y && next.y <= y)
      ) {
        const ratio =
          (y - current.y) / (next.y - current.y);
        intersections.push(
          lerp(current.x, next.x, ratio)
        );
      }
    }

    intersections.sort(function sortValues(a, b) {
      return a - b;
    });

    for (let index = 0; index < intersections.length; index += 2) {
      const start = intersections[index];
      const end = intersections[index + 1];

      if (
        typeof start !== "number" ||
        typeof end !== "number" ||
        end - start < (spacing * 0.8)
      ) {
        continue;
      }

      segments.push([
        rotate2D(
          { x: start + 1.6, y },
          angle
        ),
        rotate2D(
          { x: end - 1.6, y },
          angle
        )
      ]);
    }
  }

  return segments;
}

function getViewerModelProfile() {
  return (
    VIEWER_MODEL_PROFILES[
      RuntimeState.selectedModelId
    ] ||
    VIEWER_MODEL_PROFILES["turbine-housing"]
  );
}

function getViewerGeometry() {
  const profile = getViewerModelProfile();
  const geometryKey = [
    RuntimeState.selectedModelId,
    RuntimeState.layerHeight,
    RuntimeState.infillDensity,
    RuntimeState.supportsEnabled
  ].join("|");

  if (
    ViewerRenderCache.geometryKey === geometryKey &&
    ViewerRenderCache.geometry
  ) {
    return ViewerRenderCache.geometry;
  }

  const sampleLayers =
    clamp(
      Math.round(profile.heightMm / (RuntimeState.layerHeight * 6.4)),
      28,
      72
    );
  const layers = [];
  const pathSegments = [];
  let totalExtrusionLength = 0;

  for (let index = 0; index < sampleLayers; index += 1) {
    const ratio =
      sampleLayers === 1
        ? 0
        : index / (sampleLayers - 1);
    const z = ratio * profile.heightMm;
    const outer2d =
      buildViewerOutline(profile, ratio);
    const inner2d =
      scalePolygon(outer2d, 0.84);
    const infillAngle =
      degToRad(index % 2 === 0 ? 32 : -32);
    const infillSpacing =
      clamp(
        16 - (RuntimeState.infillDensity * 0.18),
        5,
        14
      );
    const infillSegments =
      buildScanSegments(
        scalePolygon(inner2d, 0.82),
        infillAngle,
        infillSpacing
      );
    const supportSegments =
      RuntimeState.supportsEnabled &&
      ratio > 0.38 &&
      profile.supportBias > 0.1
        ? buildScanSegments(
            scalePolygon(inner2d, 0.58),
            degToRad(90),
            10 + (profile.supportBias * 12)
          )
        : [];

    const layer = {
      z,
      outerPath: buildClosedPath(outer2d, z),
      innerPath: buildClosedPath(inner2d, z),
      infillSegments: infillSegments.map(function mapSegment(segment) {
        return segment.map(function mapPoint(point) {
          return {
            x: point.x,
            y: point.y,
            z
          };
        });
      }),
      supportSegments: supportSegments.map(function mapSegment(segment) {
        return segment.map(function mapPoint(point) {
          return {
            x: point.x,
            y: point.y,
            z
          };
        });
      })
    };

    layers.push(layer);

    [
      {
        type: "outerWall",
        points: layer.outerPath
      },
      {
        type: "innerWall",
        points: layer.innerPath
      }
    ]
      .concat(
        layer.infillSegments.map(function mapSegment(points) {
          return {
            type: "infill",
            points
          };
        })
      )
      .concat(
        layer.supportSegments.map(function mapSegment(points) {
          return {
            type: "support",
            points
          };
        })
      )
      .forEach(function collectSegment(segment) {
        const length =
          polylineLength(segment.points);

        totalExtrusionLength += length;
        pathSegments.push({
          layerIndex: index,
          type: segment.type,
          points: segment.points,
          length
        });
      });
  }

  ViewerRenderCache.geometryKey = geometryKey;
  ViewerRenderCache.geometry = {
    profile,
    layers,
    pathSegments,
    totalExtrusionLength,
    sampleLayers
  };

  return ViewerRenderCache.geometry;
}

function getDerivedPrintMetrics() {
  const geometry = getViewerGeometry();
  const profile = geometry.profile;
  const totalLayers = clamp(
    Math.round(profile.heightMm / RuntimeState.layerHeight),
    160,
    1400
  );
  const speedFactor =
    clamp(140 / RuntimeState.printSpeed, 0.52, 1.8);
  const supportFactor =
    RuntimeState.supportsEnabled
      ? 1.12
      : 0.96;
  const infillFactor =
    0.78 +
    (RuntimeState.infillDensity / 100);
  const estimatedMinutes = Math.round(
    totalLayers *
    0.34 *
    profile.complexity *
    speedFactor *
    supportFactor *
    infillFactor
  );
  const filamentMeters =
    Number(
      (
        (geometry.totalExtrusionLength / 1000) *
        0.92 *
        supportFactor
      ).toFixed(1)
    );
  const materialGrams = Math.round(
    filamentMeters * 2.85
  );

  return {
    totalLayers,
    estimatedMinutes: Math.max(32, estimatedMinutes),
    filamentMeters,
    materialGrams
  };
}

function syncDerivedPrintState() {
  const metrics = getDerivedPrintMetrics();

  RuntimeState.totalLayers = metrics.totalLayers;
  RuntimeState.currentLayer = clamp(
    Math.round(
      (RuntimeState.progress / 100) *
      RuntimeState.totalLayers
    ),
    1,
    RuntimeState.totalLayers
  );
  RuntimeState.timeRemainingMinutes = clamp(
    Math.round(
      metrics.estimatedMinutes *
      Math.max(
        0.08,
        1 - (RuntimeState.progress / 100)
      )
    ),
    6,
    metrics.estimatedMinutes
  );
  RuntimeState.estimatedFilamentMeters =
    metrics.filamentMeters;
  RuntimeState.estimatedMaterialGrams =
    metrics.materialGrams;
}

function syncNozzleTelemetry(
  activePoint,
  activeSegment,
  segmentIndex
) {
  const telemetry =
    RuntimeState.nozzleTelemetry;
  const timestamp =
    window.performance &&
    typeof window.performance.now === "function"
      ? window.performance.now()
      : Date.now();
  const previousPoint = {
    x: telemetry.x,
    y: telemetry.y,
    z: telemetry.z
  };
  const deltaX = activePoint.x - previousPoint.x;
  const deltaY = activePoint.y - previousPoint.y;
  const deltaZ = activePoint.z - previousPoint.z;
  const distance = Math.sqrt(
    (deltaX * deltaX) +
    (deltaY * deltaY) +
    (deltaZ * deltaZ)
  );
  const deltaTime =
    Math.max(
      16,
      timestamp - (telemetry.timestamp || timestamp)
    ) / 1000;
  const speed = distance / deltaTime;
  const previousMagnitude = Math.sqrt(
    (telemetry.dx || 0) * (telemetry.dx || 0) +
    (telemetry.dy || 0) * (telemetry.dy || 0)
  );
  const currentMagnitude = Math.sqrt(
    (deltaX * deltaX) + (deltaY * deltaY)
  );
  let directionChange = 0;

  if (
    previousMagnitude > 0.01 &&
    currentMagnitude > 0.01
  ) {
    const dot =
      ((telemetry.dx || 0) * deltaX +
        (telemetry.dy || 0) * deltaY) /
      (previousMagnitude * currentMagnitude);
    directionChange =
      clamp((1 - clamp(dot, -1, 1)) * 0.5, 0, 1);
  }

  telemetry.x = activePoint.x;
  telemetry.y = activePoint.y;
  telemetry.z = activePoint.z;
  telemetry.dx = deltaX;
  telemetry.dy = deltaY;
  telemetry.dz = deltaZ;
  telemetry.speed = speed;
  telemetry.directionChange = directionChange;
  telemetry.zLift = Math.abs(deltaZ);
  telemetry.extrusionActive =
    Boolean(activeSegment);
  telemetry.segmentType = activeSegment
    ? activeSegment.type
    : "idle";
  telemetry.segmentIndex =
    typeof segmentIndex === "number"
      ? segmentIndex
      : -1;
  telemetry.timestamp = timestamp;
}

function ensureViewerCanvasSize() {
  if (!DOM.viewerCanvas || !DOM.viewerCore) {
    return null;
  }

  const rect = DOM.viewerCore.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const width = Math.max(1, Math.round(rect.width));
  const height = Math.max(1, Math.round(rect.height));

  if (
    DOM.viewerCanvas.width !== Math.round(width * dpr) ||
    DOM.viewerCanvas.height !== Math.round(height * dpr)
  ) {
    DOM.viewerCanvas.width = Math.round(width * dpr);
    DOM.viewerCanvas.height = Math.round(height * dpr);
  }

  const context =
    DOM.viewerCanvas.getContext("2d");

  context.setTransform(dpr, 0, 0, dpr, 0, 0);

  return {
    context,
    width,
    height
  };
}

function projectViewerPoint(point, viewport) {
  const spin =
    degToRad(RuntimeState.viewerCameraSpin);
  const tilt =
    degToRad(RuntimeState.viewerCameraTilt);
  const rotated =
    rotate2D(
      {
        x: point.x,
        y: point.y
      },
      spin
    );
  const depth =
    (rotated.y * Math.cos(tilt)) -
    (point.z * Math.sin(tilt));
  const rise =
    (rotated.y * Math.sin(tilt)) +
    (point.z * Math.cos(tilt));
  const perspective =
    (viewport.scale * RuntimeState.viewerCameraZoom) /
    (280 + depth);

  return {
    x: viewport.cx + (rotated.x * perspective),
    y: viewport.cy - (rise * perspective),
    scale: perspective,
    depth
  };
}

function drawProjectedPolyline(
  context,
  points,
  viewport,
  options
) {
  if (!points || points.length < 2) {
    return;
  }

  context.save();
  context.beginPath();

  points.forEach(function drawPoint(point, index) {
    const projected =
      projectViewerPoint(point, viewport);

    if (index === 0) {
      context.moveTo(
        projected.x,
        projected.y
      );
    } else {
      context.lineTo(
        projected.x,
        projected.y
      );
    }
  });

  context.strokeStyle = options.color;
  context.globalAlpha =
    options.alpha == null ? 1 : options.alpha;
  context.lineWidth = options.lineWidth;
  context.lineJoin = "round";
  context.lineCap = "round";
  context.shadowBlur =
    options.shadowBlur || 0;
  context.shadowColor =
    options.shadowColor || "transparent";
  context.stroke();
  context.restore();
}

function drawProjectedPolygon(
  context,
  points,
  viewport,
  options
) {
  if (!points || points.length < 3) {
    return;
  }

  context.save();
  context.beginPath();

  points.forEach(function drawPoint(point, index) {
    const projected =
      projectViewerPoint(point, viewport);

    if (index === 0) {
      context.moveTo(
        projected.x,
        projected.y
      );
    } else {
      context.lineTo(
        projected.x,
        projected.y
      );
    }
  });

  context.closePath();
  context.fillStyle = options.fill;
  context.globalAlpha =
    options.alpha == null ? 1 : options.alpha;
  context.fill();

  if (options.stroke) {
    context.strokeStyle = options.stroke;
    context.lineWidth =
      options.lineWidth || 1;
    context.stroke();
  }

  context.restore();
}

function getPartialPolyline(points, ratio) {
  if (!points || points.length < 2) {
    return points || [];
  }

  const total =
    polylineLength(points);
  const target =
    total * clamp(ratio, 0, 1);
  const partial = [points[0]];
  let traversed = 0;

  for (let index = 1; index < points.length; index += 1) {
    const previous = points[index - 1];
    const current = points[index];
    const length =
      segmentLength(previous, current);

    if (traversed + length >= target) {
      const localRatio =
        length === 0
          ? 0
          : (target - traversed) / length;
      partial.push({
        x: lerp(previous.x, current.x, localRatio),
        y: lerp(previous.y, current.y, localRatio),
        z: lerp(previous.z, current.z, localRatio)
      });
      return partial;
    }

    partial.push(current);
    traversed += length;
  }

  return partial;
}

function drawViewerGrid(context, viewport) {
  for (let axis = -180; axis <= 180; axis += 30) {
    drawProjectedPolyline(
      context,
      [
        { x: -180, y: axis, z: 0 },
        { x: 180, y: axis, z: 0 }
      ],
      viewport,
      {
        color: "rgba(110,168,255,0.12)",
        alpha: 1,
        lineWidth: 1
      }
    );

    drawProjectedPolyline(
      context,
      [
        { x: axis, y: -180, z: 0 },
        { x: axis, y: 180, z: 0 }
      ],
      viewport,
      {
        color: "rgba(110,168,255,0.12)",
        alpha: 1,
        lineWidth: 1
      }
    );
  }
}

function drawViewerFrame(context, viewport, heightMm) {
  const corners = [
    { x: -180, y: -180, z: 0 },
    { x: 180, y: -180, z: 0 },
    { x: 180, y: 180, z: 0 },
    { x: -180, y: 180, z: 0 }
  ];
  const topCorners = corners.map(function mapPoint(point) {
    return {
      x: point.x,
      y: point.y,
      z: heightMm
    };
  });

  drawProjectedPolygon(
    context,
    corners,
    viewport,
    {
      fill: "rgba(10,16,28,0.72)",
      alpha: 0.9,
      stroke: "rgba(110,168,255,0.16)",
      lineWidth: 1.2
    }
  );
  drawProjectedPolyline(
    context,
    corners.concat([corners[0]]),
    viewport,
    {
      color: "rgba(104,232,255,0.18)",
      lineWidth: 1.1
    }
  );
  drawProjectedPolyline(
    context,
    topCorners.concat([topCorners[0]]),
    viewport,
    {
      color: "rgba(104,232,255,0.12)",
      lineWidth: 1
    }
  );

  corners.forEach(function drawColumn(point, index) {
    drawProjectedPolyline(
      context,
      [
        point,
        topCorners[index]
      ],
      viewport,
      {
        color: "rgba(104,232,255,0.1)",
        lineWidth: 1
      }
    );
  });
}

function renderPrepareScene(
  context,
  viewport,
  geometry
) {
  geometry.layers.forEach(function drawLayer(layer, index) {
    if (index % 2 !== 0) {
      return;
    }

    drawProjectedPolygon(
      context,
      layer.outerPath.slice(0, -1),
      viewport,
      {
        fill:
          index === geometry.layers.length - 1
            ? "rgba(132,236,255,0.22)"
            : "rgba(104,232,255,0.08)",
        alpha: 1,
        stroke: "rgba(110,168,255,0.16)",
        lineWidth: 1
      }
    );
  });

  const profilePoints =
    geometry.layers[geometry.layers.length - 1].outerPath;

  [0, 10, 20, 30].forEach(function drawRib(pointIndex) {
    const rib = geometry.layers.map(function mapLayer(layer) {
      return layer.outerPath[pointIndex];
    });

    drawProjectedPolyline(
      context,
      rib,
      viewport,
      {
        color: "rgba(104,232,255,0.24)",
        lineWidth: 1.4,
        alpha: 0.9
      }
    );
  });

  drawProjectedPolyline(
    context,
    profilePoints,
    viewport,
    {
      color: "rgba(176,246,255,0.76)",
      lineWidth: 2.1,
      alpha: 0.96,
      shadowBlur: 18,
      shadowColor: "rgba(104,232,255,0.22)"
    }
  );
}

function renderPreviewScene(
  context,
  viewport,
  geometry
) {
  const visibleIndex = clamp(
    Math.round(
      (RuntimeState.currentLayer / RuntimeState.totalLayers) *
      (geometry.layers.length - 1)
    ),
    0,
    geometry.layers.length - 1
  );

  geometry.layers.forEach(function drawGhostLayer(layer, index) {
    if (index % 4 !== 0 || index > visibleIndex) {
      return;
    }

    drawProjectedPolygon(
      context,
      layer.outerPath.slice(0, -1),
      viewport,
      {
        fill: "rgba(110,168,255,0.03)",
        alpha: 1,
        stroke: "rgba(110,168,255,0.08)",
        lineWidth: 1
      }
    );
  });

  geometry.layers
    .slice(0, visibleIndex + 1)
    .forEach(function drawToolpaths(layer, index) {
      const emphasis =
        index === visibleIndex ? 1 : 0.2;

      drawProjectedPolyline(
        context,
        layer.outerPath,
        viewport,
        {
          color: "rgba(72,255,118,0.95)",
          alpha: 0.5 + emphasis,
          lineWidth: 2.2
        }
      );
      drawProjectedPolyline(
        context,
        layer.innerPath,
        viewport,
        {
          color: "rgba(255,92,92,0.92)",
          alpha: 0.46 + emphasis,
          lineWidth: 1.6
        }
      );

      layer.infillSegments.forEach(function drawInfill(points) {
        drawProjectedPolyline(
          context,
          points,
          viewport,
          {
            color: "rgba(255,182,76,0.88)",
            alpha: 0.32 + (emphasis * 0.6),
            lineWidth: 1.1
          }
        );
      });

      layer.supportSegments.forEach(function drawSupport(points) {
        drawProjectedPolyline(
          context,
          points,
          viewport,
          {
            color: "rgba(86,221,255,0.78)",
            alpha: 0.28 + (emphasis * 0.5),
            lineWidth: 1
          }
        );
      });
    });
}

function renderMonitorScene(
  context,
  viewport,
  geometry
) {
  const printedLength =
    geometry.totalExtrusionLength *
    clamp(RuntimeState.progress / 100, 0, 1);
  let traversed = 0;
  let activePoint = {
    x: 0,
    y: -96,
    z: geometry.profile.heightMm + 16
  };
  let printedIndex = 0;
  let activeSegment = null;

  geometry.layers.forEach(function drawGhostLayer(layer, index) {
    if (index % 4 !== 0) {
      return;
    }

    drawProjectedPolygon(
      context,
      layer.outerPath.slice(0, -1),
      viewport,
      {
        fill: "rgba(104,232,255,0.025)",
        alpha: 1,
        stroke: "rgba(104,232,255,0.08)",
        lineWidth: 1
      }
    );
  });

  geometry.pathSegments.forEach(function drawSegment(segment, index) {
    if (traversed >= printedLength) {
      return;
    }

    const remaining =
      printedLength - traversed;
    const isPartial =
      remaining < segment.length;
    const points = isPartial
      ? getPartialPolyline(
          segment.points,
          remaining / segment.length
        )
      : segment.points;
    const isAlert =
      RuntimeState.activeDefectId !== "none" &&
      index >= geometry.pathSegments.length - 10;
    const color =
      isAlert
        ? "rgba(255,92,92,0.96)"
        : segment.type === "support"
          ? "rgba(86,221,255,0.76)"
          : segment.type === "infill"
            ? "rgba(255,183,76,0.88)"
            : "rgba(104,232,255,0.96)";

    drawProjectedPolyline(
      context,
      points,
      viewport,
      {
        color,
        alpha: RuntimeState.isPaused ? 0.84 : 0.96,
        lineWidth:
          segment.type === "outerWall"
            ? 2.8
            : segment.type === "infill"
              ? 2
              : 2.2,
        shadowBlur: isAlert ? 18 : 12,
        shadowColor: color
      }
    );

    activePoint = points[points.length - 1];
    traversed += segment.length;
    printedIndex = index;
    activeSegment = segment;
  });

  syncNozzleTelemetry(
    activePoint,
    activeSegment,
    printedIndex
  );

  const projected =
    projectViewerPoint(activePoint, viewport);

  context.save();
  context.beginPath();
  context.moveTo(projected.x, projected.y - 120);
  context.lineTo(projected.x, projected.y - 10);
  context.strokeStyle = "rgba(104,232,255,0.28)";
  context.lineWidth = 2;
  context.stroke();
  context.restore();

  context.save();
  context.fillStyle =
    RuntimeState.activeDefectId !== "none"
      ? "rgba(255,108,96,0.96)"
      : "rgba(104,232,255,0.96)";
  context.beginPath();
  context.roundRect(
    projected.x - 14,
    projected.y - 138,
    28,
    28,
    8
  );
  context.fill();
  context.restore();

  context.save();
  context.fillStyle = "rgba(240,248,255,0.96)";
  context.beginPath();
  context.roundRect(
    projected.x - 5,
    projected.y - 108,
    10,
    18,
    4
  );
  context.fill();
  context.restore();
}

function renderViewerCanvas() {
  const viewportState =
    ensureViewerCanvasSize();

  if (!viewportState) {
    return;
  }

  const geometry = getViewerGeometry();
  const context = viewportState.context;
  const viewport = {
    width: viewportState.width,
    height: viewportState.height,
    cx: viewportState.width * 0.5,
    cy: viewportState.height * 0.78,
    scale:
      Math.min(
        viewportState.width,
        viewportState.height
      ) * 3.6
  };

  context.clearRect(
    0,
    0,
    viewport.width,
    viewport.height
  );

  const glow =
    context.createRadialGradient(
      viewport.cx,
      viewport.height * 0.46,
      0,
      viewport.cx,
      viewport.height * 0.46,
      viewport.width * 0.36
    );
  glow.addColorStop(0, "rgba(104,232,255,0.14)");
  glow.addColorStop(1, "rgba(6,10,18,0)");
  context.fillStyle = glow;
  context.fillRect(
    0,
    0,
    viewport.width,
    viewport.height
  );

  drawViewerFrame(
    context,
    viewport,
    geometry.profile.heightMm + 26
  );
  drawViewerGrid(context, viewport);

  if (RuntimeState.currentStage === "prepare") {
    renderPrepareScene(
      context,
      viewport,
      geometry
    );
  } else if (RuntimeState.currentStage === "preview") {
    renderPreviewScene(
      context,
      viewport,
      geometry
    );
  } else {
    renderMonitorScene(
      context,
      viewport,
      geometry
    );
  }

  PrintSoundEngine.updateFromPrintState(
    RuntimeState
  );
}

function formatRemainingMinutes(value) {
  const totalMinutes = Math.max(0, Math.round(value));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return minutes + " мин";
  }

  return hours + " ч " + String(minutes).padStart(2, "0") + " мин";
}

function getJobStatusText() {
  if (!RuntimeState.isPrinting) {
    return "Подготовка";
  }

  if (RuntimeState.isPaused) {
    return "Пауза";
  }

  if (RuntimeState.runtime === "critical") {
    return "Стабилизация";
  }

  if (RuntimeState.runtime === "recovering") {
    return "Восстановление";
  }

  if (RuntimeState.runtime === "warning") {
    return "Компенсация";
  }

  return "Печать";
}

function getActiveDefect() {
  return DEFECT_LIBRARY.find(
    function findDefect(item) {
      return item.id === RuntimeState.activeDefectId;
    }
  ) || null;
}

function getJobDisplayStatusText() {
  const lifecycle = getJobLifecycle();

  if (lifecycle === "idle") {
    return "Подготовка";
  }

  if (lifecycle === "paused") {
    return "Пауза";
  }

  if (lifecycle === "completed") {
    return "Завершено";
  }

  if (lifecycle === "stopped") {
    return "Остановлено";
  }

  if (RuntimeState.runtime === "critical") {
    return "Стабилизация";
  }

  if (RuntimeState.runtime === "recovering") {
    return "Восстановление";
  }

  if (RuntimeState.runtime === "warning") {
    return "Компенсация";
  }

  return "Печать";
}

function getActiveRuntimeLabels() {
  const lifecycle = getJobLifecycle();
  const runtimeLabels =
    STATE_LABELS[RuntimeState.runtime] ||
    STATE_LABELS.stable;

  if (lifecycle === "idle") {
    return {
      runtimeMode: "ПОДГОТОВКА",
      runtimeStateText: "СИСТЕМА ГОТОВА",
      viewerStatus: "КОНТУР ПОДГОТОВКИ",
      printStatus: "ПОДГОТОВКА"
    };
  }

  if (lifecycle === "paused") {
    return {
      runtimeMode: "ЦИКЛ НА ПАУЗЕ",
      runtimeStateText: "ОЖИДАНИЕ КОМАНДЫ",
      viewerStatus: "ПЕЧАТЬ ПРИОСТАНОВЛЕНА",
      printStatus: "ПАУЗА"
    };
  }

  if (lifecycle === "completed") {
    return {
      runtimeMode: "ЦИКЛ ЗАВЕРШЕН",
      runtimeStateText: "ГОТОВО К АНАЛИЗУ",
      viewerStatus: "ПЕЧАТЬ ЗАВЕРШЕНА",
      printStatus: "ЗАВЕРШЕНО"
    };
  }

  if (lifecycle === "stopped") {
    return {
      runtimeMode: "ЦИКЛ ОСТАНОВЛЕН",
      runtimeStateText: "ГОТОВО К ПЕРЕЗАПУСКУ",
      viewerStatus: "ПЕЧАТЬ ОСТАНОВЛЕНА",
      printStatus: "ОСТАНОВЛЕНО"
    };
  }

  return runtimeLabels;
}

function getSelectedModel() {
  return MODEL_LIBRARY.find(
    function findModel(item) {
      return item.id === RuntimeState.selectedModelId;
    }
  ) || MODEL_LIBRARY[0];
}

function getSelectedPreset() {
  return PRESET_LIBRARY.find(
    function findPreset(item) {
      return item.id === RuntimeState.selectedPresetId;
    }
  ) || PRESET_LIBRARY[1];
}

function getTelemetryTrendLabels() {
  const preset = getSelectedPreset();
  const lifecycle = getJobLifecycle();
  const nozzleTarget = preset.nozzleTemp;
  const bedTarget = 60;
  const nozzleDelta = RuntimeState.nozzleTemp - nozzleTarget;
  const bedDelta = RuntimeState.bedTemp - bedTarget;

  let nozzle = "В допуске";
  if (
    RuntimeState.runtime === "critical" ||
    RuntimeState.nozzleTemp >= 225
  ) {
    nozzle = "Порог";
  } else if (RuntimeState.runtime === "recovering") {
    nozzle = "Стабилизация";
  } else if (nozzleDelta <= -2.5) {
    nozzle = "Ниже цели";
  } else if (nozzleDelta >= 2.5) {
    nozzle = "Выше цели";
  }

  let bed = "Плато";
  if (RuntimeState.runtime === "recovering") {
    bed = "Стабилизация";
  } else if (bedDelta <= -1.5) {
    bed = "Ниже цели";
  } else if (bedDelta >= 1.5) {
    bed = "Выше цели";
  }

  let speed = "Номинал";
  if (
    lifecycle === "idle" ||
    lifecycle === "stopped" ||
    lifecycle === "completed"
  ) {
    speed = "Ожидание";
  } else if (lifecycle === "paused") {
    speed = "Пауза";
  } else if (
    RuntimeState.runtime === "critical" ||
    RuntimeState.runtime === "recovering"
  ) {
    speed = "Коррекция";
  } else if (RuntimeState.printSpeed >= preset.printSpeed + 18) {
    speed = "Разгон";
  }

  let vibration = "Низкая";
  if (RuntimeState.vibration >= 0.3) {
    vibration = "Риск";
  } else if (RuntimeState.vibration >= 0.18) {
    vibration = "Контроль";
  }

  return {
    nozzle: nozzle,
    bed: bed,
    speed: speed,
    vibration: vibration
  };
}

function getNavigationConfig(navId) {
  return NAVIGATION_LIBRARY.find(
    function findNavigation(item) {
      return item.id === navId;
    }
  ) || NAVIGATION_LIBRARY[0];
}

function getDefaultNavForStage(stageId) {
  if (stageId === "monitor") {
    return "monitoring";
  }

  if (stageId === "preview") {
    return "profiles";
  }

  return "slicing";
}

function setWorkspaceContext(navId, stageId, focusPanelId) {
  const navConfig =
    getNavigationConfig(navId || RuntimeState.currentNav);

  RuntimeState.currentNav =
    navId || navConfig.id;

  RuntimeState.currentStage =
    stageId || navConfig.stage || RuntimeState.currentStage;

  RuntimeState.focusPanelId =
    focusPanelId ||
    navConfig.focusPanelId ||
    RuntimeState.focusPanelId;
}

function getJobLifecycle() {
  if (RuntimeState.jobLifecycle === "completed") {
    return "completed";
  }

  if (RuntimeState.jobLifecycle === "stopped") {
    return "stopped";
  }

  if (RuntimeState.isPrinting && RuntimeState.isPaused) {
    return "paused";
  }

  if (RuntimeState.isPrinting) {
    return "running";
  }

  return "idle";
}

function getDisplayLabels() {
  return getActiveRuntimeLabels();
}

function getRiskLabel() {
  if (RuntimeState.runtime === "critical") {
    return "Критический";
  }

  if (RuntimeState.runtime === "warning") {
    return "Повышенный";
  }

  if (RuntimeState.runtime === "recovering") {
    return "Стабилизация";
  }

  if (RuntimeState.vibration > 0.28 || RuntimeState.nozzleTemp > 220) {
    return "Контроль";
  }

  return "Низкий";
}

function pushTerminalEntry(message, type) {
  RuntimeState.terminalFeed.unshift({
    time: nowTime(),
    message,
    type: type || "info"
  });

  RuntimeState.terminalFeed =
    RuntimeState.terminalFeed.slice(0, 14);
}

function pushAlert(level, message) {
  RuntimeState.alerts.unshift({
    level,
    message,
    time: nowTime()
  });

  RuntimeState.alerts =
    RuntimeState.alerts.slice(0, 5);
}

function pushAIMessage(text, role) {
  RuntimeState.aiMessages.push({
    text,
    role: role || "assistant"
  });

  RuntimeState.aiMessages =
    RuntimeState.aiMessages.slice(-18);
}

function syncRuntimeLabels() {
  const labels =
    STATE_LABELS[RuntimeState.runtime] ||
    STATE_LABELS.stable;

  RuntimeState.printStatus =
    labels.printStatus;

  RuntimeState.viewerStatus =
    labels.viewerStatus;
}

function setRuntimeState(state) {
  if (!STATE_LABELS[state]) {
    return;
  }

  RuntimeState.runtime = state;
  syncRuntimeLabels();
}

function getMockAIReply(input) {
  const normalized =
    String(input || "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();

  const confidentialPattern =
    /(внутрен|исходн|архитектур|алгоритм|код|модель.*обуч|api|сервер|под капот|как работает система|конфиденц|безопасност|протокол|датасет|вес)/i;

  if (confidentialPattern.test(normalized)) {
    return "Эта часть контура закрыта. Я болтливый, но не настолько: внутренние детали системы относятся к конфиденциальным данным.";
  }

  if (/(привет|здравств|добрый|hello|hi)/i.test(normalized)) {
    return "На связи. Контур не спит, телеметрия тоже. Могу подсказать по профилю, рискам печати и текущему циклу.";
  }

  if (/(кто ты|что ты умеешь|что умеешь|помощь|help)/i.test(normalized)) {
    return "Я mock AI-оператор NextGen Slicer. Отвечаю по профилям, слоям, дефектам и состоянию печати. Кофе не варю, но скорость и поток обсуждаю уверенно.";
  }

  if (/(статус|как дела|что по печати|что с печатью|состояние|runtime)/i.test(normalized)) {
    return "Текущий режим: " + getJobDisplayStatusText() + ". Риск: " + getRiskLabel() + ". Если кратко, контур держится бодро и пока без драматургии.";
  }

  if (/(дефект|ошибк|авари|красн|спагет|недоэкстру|сдвиг|наплыв|нити)/i.test(normalized)) {
    return "Если нужен показательный сбой, активируйте дефект через панель печати. Контур подсветит проблемный участок и подстроит диагностику без лишней паники.";
  }

  if (/(скорост|поток|температур|слой|infill|заполн|поддержк|профил)/i.test(normalized)) {
    return "По текущему профилю я бы менял параметры умеренно: сначала слой и скорость, потом поток и температуру. Печатать наугад можно, но контур потом смотрит с укором.";
  }

  if (/(спасибо|благодар)/i.test(normalized)) {
    return "Принято. Контур продолжает наблюдение.";
  }

  return "Запрос принят. Могу помочь с профилем, слоями, дефектами, временем печати и состоянием цикла. За секреты системы не торгуюсь.";
}

function syncViewerFullscreenButton() {
  if (!DOM.viewerFullscreenButton) {
    return;
  }

  const isFullscreen =
    document.fullscreenElement === DOM.viewerPanel ||
    isDetachedViewerFullscreen();

  DOM.viewerFullscreenButton.textContent =
    isFullscreen ? "Свернуть" : "Развернуть";
  DOM.viewerFullscreenButton.setAttribute(
    "aria-pressed",
    isFullscreen ? "true" : "false"
  );
}

function toggleViewerFullscreen() {
  if (!DOM.viewerPanel) {
    return;
  }

  if (
    DOM.body &&
    DOM.body.dataset.viewportMode ===
      "mobile-landscape"
  ) {
    if (isDetachedViewerFullscreen()) {
      exitDetachedViewerFullscreen();
      return;
    }

    enterDetachedViewerFullscreen();
    return;
  }

  if (document.fullscreenElement === DOM.viewerPanel) {
    document.exitFullscreen();
    return;
  }

  if (DOM.viewerPanel.requestFullscreen) {
    DOM.viewerPanel.requestFullscreen();
  }
}

/* =========================================
   EVENT BUS SYSTEM
========================================= */

const RuntimeEvents = {
  events: {},

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(callback);
  },

  emit(event, payload) {
    const eventPayload = payload || {};

    if (!this.events[event]) {
      return;
    }

    this.events[event].forEach(
      function eachListener(callback) {
        callback(eventPayload);
      }
    );
  }
};

/* =========================================
   ASSETS / BOOT / AUDIO
========================================= */

const AssetManager = {
  imageCache: new Map(),
  loaded: false,

  preloadImage(path) {
    if (!path || this.imageCache.has(path)) {
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      const image = new Image();

      image.onload = () => {
        this.imageCache.set(path, image);
        resolve();
      };

      image.onerror = () => {
        resolve();
      };

      image.src = path;
    });
  },

  async preloadCore() {
    const paths = []
      .concat(Object.values(AssetRegistry.icons || {}))
      .concat(Object.values(AssetRegistry.ui || {}))
      .filter(Boolean)
      .filter(function unique(path, index, array) {
        return array.indexOf(path) === index;
      });

    await Promise.allSettled(
      paths.map((path) => this.preloadImage(path))
    );

    this.loaded = true;
  },

  getIcon(name, fallback) {
    return (
      (AssetRegistry.icons &&
        AssetRegistry.icons[name]) ||
      fallback ||
      ""
    );
  }
};

const BootManager = {
  started: false,
  done: false,

  show() {
    if (DOM.body) {
      DOM.body.dataset.boot = "loading";
    }
  },

  setStep(status, progress, hint) {
    if (DOM.bootLoaderStatus) {
      DOM.bootLoaderStatus.textContent = status;
    }

    if (DOM.bootLoaderProgress) {
      DOM.bootLoaderProgress.style.width =
        Math.round(progress * 100) + "%";
    }

    if (DOM.bootLoaderStepLabel) {
      DOM.bootLoaderStepLabel.textContent =
        Math.round(progress * 100) + "%";
    }

    if (DOM.bootLoaderHint && hint) {
      DOM.bootLoaderHint.textContent = hint;
    }
  },

  nextFrame() {
    return new Promise(function resolveOnFrame(resolve) {
      window.requestAnimationFrame(function onFrame() {
        resolve();
      });
    });
  },

  wait(ms) {
    return new Promise(function resolveAfterDelay(resolve) {
      window.setTimeout(resolve, ms);
    });
  },

  async complete() {
    this.done = true;
    this.setStep(
      "Готово",
      1,
      "Переход в рабочее приложение"
    );
    await this.wait(220);

    if (DOM.bootLoader) {
      DOM.bootLoader.classList.add("is-hidden");
    }

    if (DOM.body) {
      DOM.body.dataset.boot = "ready";
    }

    AudioManager.play("appReady");
  }
};

const AudioManager = {
  storageKey: "nextgen.audio.settings",
  audioContext: null,
  masterGain: null,
  noiseBuffer: null,
  mix: {
    ui: 0.72,
    print: 1,
    alert: 0.84,
    agent: 0.58
  },
  unlocked: false,
  initialized: false,
  muted: false,
  volume: 0.72,
  cooldowns: {},
  loops: {},

  init() {
    if (this.initialized) {
      return;
    }

    this.initialized = true;
    this.loadSettings();
    this.syncUI();
    this.attachUnlock();
  },

  loadSettings() {
    try {
      const saved = JSON.parse(
        window.localStorage.getItem(this.storageKey) || "{}"
      );

      this.muted = Boolean(saved.muted);
      this.volume = clamp(
        Number(saved.volume || this.volume),
        0,
        1
      );
    } catch (error) {
      this.muted = false;
      this.volume = 0.72;
    }
  },

  saveSettings() {
    try {
      window.localStorage.setItem(
        this.storageKey,
        JSON.stringify({
          muted: this.muted,
          volume: this.volume
        })
      );
    } catch (error) {
      console.warn("Audio settings were not saved.");
    }
  },

  ensureContext() {
    if (this.audioContext) {
      return this.audioContext;
    }

    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) {
      return null;
    }

    this.audioContext = new AudioContextClass();
    this.masterGain =
      this.audioContext.createGain();
    this.masterGain.gain.value =
      this.muted ? 0 : this.volume;
    this.masterGain.connect(
      this.audioContext.destination
    );

    return this.audioContext;
  },

  attachUnlock() {
    const unlock = () => {
      this.unlock();
    };

    ["pointerdown", "keydown", "touchstart"].forEach(
      function bind(eventName) {
        window.addEventListener(eventName, unlock, {
          once: true,
          passive: true
        });
      }
    );
  },

  async unlock() {
    const context = this.ensureContext();

    if (!context) {
      return;
    }

    if (context.state === "suspended") {
      await context.resume();
    }

    this.unlocked = true;
    this.play("appStart");
    this.syncPrintLoop();
    this.syncUI();
  },

  syncUI() {
    if (DOM.audioToggleIcon) {
      DOM.audioToggleIcon.src = this.muted
        ? AssetManager.getIcon("soundOff")
        : AssetManager.getIcon("soundOn");
    }

    if (DOM.audioToggleText) {
      DOM.audioToggleText.textContent = this.muted
        ? "Звук выкл"
        : "Звук";
    }

    if (DOM.audioToggleButton) {
      DOM.audioToggleButton.setAttribute(
        "aria-pressed",
        this.muted ? "true" : "false"
      );
    }

    if (DOM.audioVolumeControl) {
      DOM.audioVolumeControl.value = String(
        Math.round(this.volume * 100)
      );
      DOM.audioVolumeControl.disabled =
        this.muted;
    }
  },

  setMuted(nextMuted) {
    this.muted = Boolean(nextMuted);

    if (this.masterGain) {
      this.masterGain.gain.value = this.muted
        ? 0
        : this.volume;
    }

    if (this.muted) {
      this.stop("printLoop", 120);
    } else {
      this.syncPrintLoop();
      this.play("notification");
    }

    this.saveSettings();
    this.syncUI();
  },

  toggleMute() {
    this.setMuted(!this.muted);
  },

  setVolume(nextVolume) {
    this.volume = clamp(Number(nextVolume), 0, 1);

    if (this.masterGain && !this.muted) {
      this.masterGain.gain.value = this.volume;
    }

    this.saveSettings();
    this.syncUI();
  },

  createNoiseBuffer(context) {
    if (this.noiseBuffer) {
      return this.noiseBuffer;
    }

    const duration = 2.4;
    const length =
      Math.floor(context.sampleRate * duration);
    const buffer = context.createBuffer(
      1,
      length,
      context.sampleRate
    );
    const channel = buffer.getChannelData(0);
    let last = 0;

    for (let index = 0; index < length; index += 1) {
      const white = (Math.random() * 2) - 1;
      last = (last * 0.965) + (white * 0.035);
      channel[index] = last * 0.75;
    }

    this.noiseBuffer = buffer;
    return buffer;
  },

  createNoiseSource(context) {
    const source =
      context.createBufferSource();
    source.buffer = this.createNoiseBuffer(context);
    source.loop = true;
    return source;
  },

  canPlay(name) {
    const sound =
      (AssetRegistry.sounds &&
        AssetRegistry.sounds[name]) ||
      {};
    const cooldown = Number(sound.cooldown || 0);
    const now = Date.now();

    if (
      cooldown > 0 &&
      this.cooldowns[name] &&
      now - this.cooldowns[name] < cooldown
    ) {
      return false;
    }

    this.cooldowns[name] = now;
    return true;
  },

  createEnvelope(output, shape) {
    const context = this.ensureContext();

    if (!context || !this.masterGain) {
      return null;
    }

    const gain =
      context.createGain();
    gain.gain.value = 0;
    gain.connect(this.masterGain);
    output.connect(gain);

    const now = context.currentTime;
    const attack = shape.attack || 0.01;
    const peak = shape.peak || 0.18;
    const sustain = shape.sustain || 0.0001;
    const decay = shape.decay || 0.18;

    gain.gain.cancelScheduledValues(now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(
      peak,
      now + attack
    );
    gain.gain.exponentialRampToValueAtTime(
      sustain,
      now + attack + decay
    );

    return gain;
  },

  playTone(config) {
    const context = this.ensureContext();

    if (
      !context ||
      !this.masterGain ||
      !this.unlocked ||
      this.muted
    ) {
      return;
    }

    const oscillator =
      context.createOscillator();
    const filter =
      context.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value =
      config.filter || 1800;
    oscillator.type =
      config.wave || "triangle";
    oscillator.frequency.setValueAtTime(
      config.frequency || 440,
      context.currentTime
    );
    oscillator.connect(filter);

    const gain = this.createEnvelope(filter, {
      attack: config.attack || 0.008,
      decay: config.decay || 0.18,
      peak:
        (config.peak || 0.12) *
        (config.mix || 1),
      sustain:
        (config.sustain || 0.0001) *
        (config.mix || 1)
    });

    oscillator.start();

    if (config.glideTo) {
      oscillator.frequency.linearRampToValueAtTime(
        config.glideTo,
        context.currentTime + (config.duration || 0.22)
      );
    }

    oscillator.stop(
      context.currentTime + (config.duration || 0.24)
    );

    oscillator.onended = function cleanup() {
      oscillator.disconnect();
      filter.disconnect();
      if (gain) {
        gain.disconnect();
      }
    };
  },

  updatePrintLoopProfile(loop) {
    if (!loop || !this.audioContext) {
      return;
    }

    const context = this.audioContext;
    const speedRatio =
      clamp((RuntimeState.printSpeed - 40) / 180, 0, 1);
    const runtime =
      RuntimeState.runtime || "stable";
    const hasDefect =
      RuntimeState.activeDefectId &&
      RuntimeState.activeDefectId !== "none";

    let targetLevel =
      0.012 + (speedRatio * 0.01);

    if (runtime === "warning") {
      targetLevel *= 0.92;
    }

    if (runtime === "critical") {
      targetLevel *= 0.78;
    }

    if (RuntimeState.isPaused) {
      targetLevel *= 0.25;
    }

    const noiseLevel =
      0.0022 +
      (speedRatio * 0.0038) +
      (hasDefect ? 0.0016 : 0);

    const rumbleLevel =
      0.0048 +
      (speedRatio * 0.0036);

    const detailLevel =
      0.0022 +
      (speedRatio * 0.0028);

    loop.rumble.frequency.setTargetAtTime(
      38 + (speedRatio * 18),
      context.currentTime,
      0.18
    );

    loop.detail.frequency.setTargetAtTime(
      72 + (speedRatio * 34),
      context.currentTime,
      0.16
    );

    loop.motion.frequency.setTargetAtTime(
      1.5 + (speedRatio * 3.1),
      context.currentTime,
      0.18
    );

    loop.rumbleGain.gain.setTargetAtTime(
      rumbleLevel,
      context.currentTime,
      0.18
    );

    loop.detailGain.gain.setTargetAtTime(
      detailLevel,
      context.currentTime,
      0.18
    );

    loop.noiseGain.gain.setTargetAtTime(
      noiseLevel,
      context.currentTime,
      0.18
    );

    loop.noiseFilter.frequency.setTargetAtTime(
      hasDefect
        ? 380 + (speedRatio * 120)
        : 520 + (speedRatio * 260),
      context.currentTime,
      0.2
    );

    loop.noiseLowpass.frequency.setTargetAtTime(
      hasDefect
        ? 840 + (speedRatio * 220)
        : 1180 + (speedRatio * 360),
      context.currentTime,
      0.2
    );

    loop.gain.gain.setTargetAtTime(
      Math.max(0.0001, targetLevel),
      context.currentTime,
      0.22
    );
  },

  play(name) {
    if (!this.canPlay(name)) {
      return;
    }

    const sound =
      (AssetRegistry.sounds &&
        AssetRegistry.sounds[name]) ||
      null;

    if (!sound) {
      return;
    }

    switch (sound.kind) {
      case "click-soft":
        this.playTone({
          frequency: 360,
          glideTo: 300,
          duration: 0.07,
          peak: 0.026,
          filter: 980,
          wave: "sine",
          mix: this.mix.ui
        });
        break;
      case "tab-switch":
        this.playTone({
          frequency: 320,
          glideTo: 410,
          duration: 0.09,
          peak: 0.03,
          filter: 1180,
          wave: "triangle",
          mix: this.mix.ui
        });
        break;
      case "setting-change":
        this.playTone({
          frequency: 398,
          glideTo: 470,
          duration: 0.09,
          peak: 0.028,
          filter: 1220,
          wave: "triangle",
          mix: this.mix.ui
        });
        break;
      case "notification":
      case "success":
      case "confirm-bright":
      case "slice-complete":
      case "print-complete":
        this.playTone({
          frequency: 430,
          glideTo: 560,
          duration: 0.16,
          peak: 0.042,
          filter: 1560,
          wave: "triangle",
          mix: this.mix.ui
        });
        break;
      case "agent-message":
        this.playTone({
          frequency: 500,
          glideTo: 610,
          duration: 0.1,
          peak: 0.024,
          filter: 1480,
          wave: "sine",
          mix: this.mix.agent
        });
        break;
      case "warning":
      case "defect-detected":
        this.playTone({
          frequency: 240,
          glideTo: 210,
          duration: 0.16,
          peak: 0.044,
          filter: 760,
          wave: "triangle",
          mix: this.mix.alert
        });
        break;
      case "error":
        this.playTone({
          frequency: 176,
          glideTo: 132,
          duration: 0.22,
          peak: 0.056,
          filter: 560,
          wave: "triangle",
          mix: this.mix.alert
        });
        break;
      case "defect-recovered":
      case "print-resume":
        this.playTone({
          frequency: 280,
          glideTo: 430,
          duration: 0.14,
          peak: 0.034,
          filter: 1180,
          wave: "triangle",
          mix: this.mix.ui
        });
        break;
      case "print-pause":
      case "panel-close":
      case "print-stop":
        this.playTone({
          frequency: 290,
          glideTo: 210,
          duration: 0.11,
          peak: 0.03,
          filter: 860,
          wave: "triangle",
          mix: this.mix.ui
        });
        break;
      case "panel-open":
      case "chime-soft":
      case "print-start":
      default:
        this.playTone({
          frequency: 300,
          glideTo: 390,
          duration: 0.12,
          peak: 0.032,
          filter: 1080,
          wave: "triangle",
          mix: this.mix.ui
        });
        break;
    }
  },

  loop(name) {
    if (name !== "printLoop") {
      return;
    }

    const context = this.ensureContext();

    if (
      !context ||
      !this.masterGain ||
      !this.unlocked ||
      this.muted
    ) {
      return;
    }

    if (this.loops[name]) {
      return;
    }

    const gain = context.createGain();
    gain.gain.value = 0.0001;
    gain.connect(this.masterGain);

    const rumble =
      context.createOscillator();
    rumble.type = "triangle";

    const detail =
      context.createOscillator();
    detail.type = "sine";

    const motion =
      context.createOscillator();
    motion.type = "sine";

    const motionDepth =
      context.createGain();
    motionDepth.gain.value = 18;

    const rumbleGain =
      context.createGain();
    const detailGain =
      context.createGain();
    const noiseGain =
      context.createGain();
    const noiseFilter =
      context.createBiquadFilter();
    const noiseLowpass =
      context.createBiquadFilter();
    const noise =
      this.createNoiseSource(context);

    noiseFilter.type = "bandpass";
    noiseLowpass.type = "lowpass";
    rumbleGain.gain.value = 0.004;
    detailGain.gain.value = 0.002;
    noiseGain.gain.value = 0.002;

    rumble.connect(rumbleGain);
    rumbleGain.connect(gain);

    detail.connect(detailGain);
    detailGain.connect(gain);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseLowpass);
    noiseLowpass.connect(noiseGain);
    noiseGain.connect(gain);

    motion.connect(motionDepth);
    motionDepth.connect(detail.frequency);
    motionDepth.connect(noiseFilter.frequency);

    rumble.start();
    detail.start();
    motion.start();
    noise.start();

    this.loops[name] = {
      gain,
      rumble,
      detail,
      motion,
      motionDepth,
      rumbleGain,
      detailGain,
      noiseGain,
      noiseFilter,
      noiseLowpass,
      nodes: [
        rumble,
        detail,
        motion,
        motionDepth,
        rumbleGain,
        detailGain,
        noiseGain,
        noiseFilter,
        noiseLowpass,
        noise
      ]
    };

    this.updatePrintLoopProfile(
      this.loops[name]
    );
  },

  stop(name, fadeMs) {
    const loop = this.loops[name];
    const context = this.ensureContext();

    if (!loop || !context) {
      return;
    }

    const fade =
      Math.max(0.06, (fadeMs || 180) / 1000);
    const stopAt =
      context.currentTime + fade;

    loop.gain.gain.cancelScheduledValues(
      context.currentTime
    );
    loop.gain.gain.setValueAtTime(
      Math.max(0.0001, loop.gain.gain.value),
      context.currentTime
    );
    loop.gain.gain.exponentialRampToValueAtTime(
      0.0001,
      stopAt
    );

    loop.nodes.forEach(function stopNode(node) {
      if (node.stop) {
        node.stop(stopAt + 0.02);
      }
    });

    window.setTimeout(() => {
      loop.nodes.forEach(function disconnectNode(node) {
        if (node.disconnect) {
          node.disconnect();
        }
      });
      loop.gain.disconnect();
      delete this.loops[name];
    }, (fadeMs || 180) + 80);
  },

  syncPrintLoop() {
    if (this.loops.printLoop) {
      this.stop("printLoop", 120);
    }

    PrintSoundEngine.updateFromPrintState(
      RuntimeState
    );
  },

  handleTerminalEvent(payload) {
    const type = payload.type || "info";

    if (type === "navigation") {
      this.play("tabSwitch");
      return;
    }

    if (type === "stage") {
      this.play("tabSwitch");
      return;
    }

    if (type === "control") {
      this.play("settingChange");
      return;
    }

    if (
      type === "preset" ||
      type === "model"
    ) {
      this.play("sliceComplete");
      return;
    }

    if (type === "ai") {
      this.play("agentMessage");
      return;
    }

    if (type === "warning") {
      this.play("warning");
      return;
    }

    if (
      type === "critical" ||
      type === "defect"
    ) {
      this.play("error");
      return;
    }

    if (type === "boot") {
      this.play("notification");
    }
  },

  handleRuntimeState(nextState) {
    if (nextState === "warning") {
      this.play("warning");
    } else if (nextState === "critical") {
      this.play("error");
    } else if (nextState === "recovering") {
      this.play("defectRecovered");
    }

    this.syncPrintLoop();
  }
};

const PrintSoundEngine = {
  initialized: false,
  active: false,
  paused: false,
  nodes: null,
  outputGain: null,
  lastDirectionTickAt: 0,
  lastZLiftAt: 0,

  ensure() {
    const context = AudioManager.ensureContext();

    if (
      !context ||
      !AudioManager.masterGain ||
      this.initialized
    ) {
      return context;
    }

    const outputGain =
      context.createGain();
    const motionGain =
      context.createGain();
    const extrusionGain =
      context.createGain();
    const textureGain =
      context.createGain();
    const body =
      context.createOscillator();
    const stepper =
      context.createOscillator();
    const extrusion =
      context.createOscillator();
    const motionLfo =
      context.createOscillator();
    const motionDepth =
      context.createGain();
    const stepperDepth =
      context.createGain();
    const textureNoise =
      AudioManager.createNoiseSource(context);
    const textureBand =
      context.createBiquadFilter();
    const textureLow =
      context.createBiquadFilter();

    outputGain.gain.value = 0.0001;
    motionGain.gain.value = 0.0001;
    extrusionGain.gain.value = 0.0001;
    textureGain.gain.value = 0.0001;

    body.type = "triangle";
    stepper.type = "triangle";
    extrusion.type = "sine";
    motionLfo.type = "sine";

    body.frequency.value = 38;
    stepper.frequency.value = 92;
    extrusion.frequency.value = 122;
    motionLfo.frequency.value = 1.8;
    motionDepth.gain.value = 9;
    stepperDepth.gain.value = 14;

    textureBand.type = "bandpass";
    textureLow.type = "lowpass";
    textureBand.frequency.value = 720;
    textureLow.frequency.value = 1320;

    motionLfo.connect(motionDepth);
    motionLfo.connect(stepperDepth);
    motionDepth.connect(stepper.frequency);
    stepperDepth.connect(textureBand.frequency);

    body.connect(motionGain);
    stepper.connect(motionGain);
    extrusion.connect(extrusionGain);
    textureNoise.connect(textureBand);
    textureBand.connect(textureLow);
    textureLow.connect(textureGain);

    motionGain.connect(outputGain);
    extrusionGain.connect(outputGain);
    textureGain.connect(outputGain);
    outputGain.connect(AudioManager.masterGain);

    body.start();
    stepper.start();
    extrusion.start();
    motionLfo.start();
    textureNoise.start();

    this.outputGain = outputGain;
    this.nodes = {
      context,
      body,
      stepper,
      extrusion,
      motionLfo,
      motionGain,
      extrusionGain,
      textureGain,
      textureNoise,
      textureBand,
      textureLow
    };
    this.initialized = true;
    return context;
  },

  setSpeed(value) {
    RuntimeState.nozzleTelemetry.speed = value;
  },

  setNozzlePosition(x, y, z) {
    RuntimeState.nozzleTelemetry.x = x;
    RuntimeState.nozzleTelemetry.y = y;
    RuntimeState.nozzleTelemetry.z = z;
  },

  setExtrusionActive(value) {
    RuntimeState.nozzleTelemetry.extrusionActive =
      Boolean(value);
  },

  setDefectState(value) {
    RuntimeState.activeDefectId = value || "none";
  },

  start() {
    const context = this.ensure();

    if (
      !context ||
      !AudioManager.unlocked ||
      AudioManager.muted ||
      !this.outputGain
    ) {
      return;
    }

    this.active = true;
    this.paused = false;
  },

  pause() {
    this.paused = true;

    if (!this.outputGain || !this.nodes) {
      return;
    }

    this.outputGain.gain.setTargetAtTime(
      0.0001,
      this.nodes.context.currentTime,
      0.18
    );
  },

  resume() {
    this.paused = false;
    this.active = true;
  },

  stop() {
    this.active = false;
    this.paused = false;

    if (!this.outputGain || !this.nodes) {
      return;
    }

    this.outputGain.gain.setTargetAtTime(
      0.0001,
      this.nodes.context.currentTime,
      0.14
    );
  },

  complete() {
    this.stop();
  },

  emitDirectionTick(intensity) {
    const now = Date.now();

    if (
      now - this.lastDirectionTickAt < 120 ||
      !AudioManager.unlocked ||
      AudioManager.muted
    ) {
      return;
    }

    this.lastDirectionTickAt = now;
    AudioManager.playTone({
      frequency: 168 + (intensity * 56),
      glideTo: 142 + (intensity * 18),
      duration: 0.055,
      peak: 0.013,
      filter: 640,
      wave: "triangle",
      mix: AudioManager.mix.print * 0.72
    });
  },

  emitZLift(level) {
    const now = Date.now();

    if (
      now - this.lastZLiftAt < 240 ||
      !AudioManager.unlocked ||
      AudioManager.muted
    ) {
      return;
    }

    this.lastZLiftAt = now;
    AudioManager.playTone({
      frequency: 220,
      glideTo: 318 + (level * 40),
      duration: 0.08,
      peak: 0.016,
      filter: 880,
      wave: "sine",
      mix: AudioManager.mix.print * 0.78
    });
  },

  updateFromPrintState(state) {
    const context = this.ensure();
    const telemetry = state.nozzleTelemetry;
    const isPrinting =
      state.isPrinting &&
      state.jobLifecycle !== "stopped" &&
      state.jobLifecycle !== "completed";

    if (!context || !this.nodes || !this.outputGain) {
      return;
    }

    if (!AudioManager.unlocked || AudioManager.muted) {
      this.stop();
      return;
    }

    if (!isPrinting) {
      if (state.jobLifecycle === "completed") {
        this.complete();
      } else {
        this.stop();
      }
      return;
    }

    if (state.isPaused) {
      this.pause();
      return;
    }

    this.start();

    const speedRatio =
      clamp(
        telemetry.speed > 0
          ? telemetry.speed / 180
          : (state.printSpeed - 40) / 180,
        0,
        1
      );
    const flowRatio =
      clamp((state.flowRate - 80) / 60, 0, 1);
    const directionRatio =
      clamp(telemetry.directionChange, 0, 1);
    const zRatio =
      clamp(telemetry.zLift / 2.6, 0, 1);
    const defectActive =
      state.activeDefectId !== "none";
    const printMix =
      AudioManager.mix.print *
      (document.hidden ? 0.42 : 1);
    const baseLevel =
      (0.012 + (speedRatio * 0.012)) * printMix;
    const motionLevel =
      (0.0038 + (speedRatio * 0.0064)) * printMix;
    const extrusionLevel =
      telemetry.extrusionActive
        ? (0.0022 + (flowRatio * 0.0044)) * printMix
        : 0.0001;
    const textureLevel =
      (
        0.0014 +
        (directionRatio * 0.0024) +
        (defectActive ? 0.002 : 0) +
        (telemetry.extrusionActive ? 0.0012 : 0)
      ) * printMix;

    this.nodes.body.frequency.setTargetAtTime(
      34 + (speedRatio * 14),
      context.currentTime,
      0.16
    );
    this.nodes.stepper.frequency.setTargetAtTime(
      74 + (speedRatio * 42) + (directionRatio * 18),
      context.currentTime,
      0.11
    );
    this.nodes.extrusion.frequency.setTargetAtTime(
      112 + (flowRatio * 34),
      context.currentTime,
      0.14
    );
    this.nodes.motionLfo.frequency.setTargetAtTime(
      1.4 + (speedRatio * 2.8),
      context.currentTime,
      0.18
    );
    this.nodes.textureBand.frequency.setTargetAtTime(
      defectActive
        ? 520 + (directionRatio * 180)
        : 760 + (directionRatio * 260),
      context.currentTime,
      0.18
    );
    this.nodes.textureLow.frequency.setTargetAtTime(
      defectActive
        ? 920 + (speedRatio * 220)
        : 1280 + (speedRatio * 380),
      context.currentTime,
      0.18
    );

    this.outputGain.gain.setTargetAtTime(
      Math.max(0.0001, baseLevel),
      context.currentTime,
      0.16
    );
    this.nodes.motionGain.gain.setTargetAtTime(
      Math.max(0.0001, motionLevel),
      context.currentTime,
      0.14
    );
    this.nodes.extrusionGain.gain.setTargetAtTime(
      Math.max(0.0001, extrusionLevel),
      context.currentTime,
      0.14
    );
    this.nodes.textureGain.gain.setTargetAtTime(
      Math.max(0.0001, textureLevel),
      context.currentTime,
      0.14
    );

    if (directionRatio > 0.34) {
      this.emitDirectionTick(directionRatio);
    }

    if (zRatio > 0.24) {
      this.emitZLift(zRatio);
    }
  },

  dispose() {
    this.stop();
  }
};

/* =========================================
   AI ORCHESTRATION
========================================= */

const AIOrchestrator = {
  pending: false,
  timerId: null,

  queue(category, fallbackMessage) {
    if (this.pending) {
      return;
    }

    const response =
      pickRandom(AI_RESPONSES[category]) ||
      fallbackMessage;

    if (!response) {
      return;
    }

    this.pending = true;
    window.clearTimeout(this.timerId);

    this.timerId = window.setTimeout(
      () => {
        this.pending = false;
        this.timerId = null;

        RuntimeEvents.emit(
          "ai:response",
          {
            message: response,
            role: "assistant",
            payload: {
              category
            }
          }
        );

        RuntimeEvents.emit(
          "terminal:message",
          {
            message: "AI-ассистент выдал инженерную рекомендацию.",
            type: "ai"
          }
        );
      },
      800 + Math.random() * 300
    );
  },

  respond(message, category) {
    if (!message) {
      return;
    }

    this.pending = true;
    window.clearTimeout(this.timerId);

    this.timerId = window.setTimeout(
      () => {
        this.pending = false;
        this.timerId = null;

        RuntimeEvents.emit(
          "ai:response",
          {
            message,
            role: "assistant",
            payload: {
              category: category || "user_guidance"
            }
          }
        );

        RuntimeEvents.emit(
          "terminal:message",
          {
            message: "AI-контур обработал пользовательский запрос.",
            type: "ai"
          }
        );
      },
      760 + Math.random() * 220
    );
  },

  reset() {
    this.pending = false;
    window.clearTimeout(this.timerId);
    this.timerId = null;
  }
};

/* =========================================
   UI RENDER SYSTEM
========================================= */

const UIRender = {
  previous: {},

  render() {
    syncDerivedPrintState();
    this.renderNavigation();
    this.renderStageRail();
    this.renderRuntimeLabels();
    this.renderTemperatures();
    this.renderSpeed();
    this.renderFlowRate();
    this.renderVibration();
    this.renderTelemetryTrends();
    this.renderViewerState();
    this.renderAIConfidence();
    this.renderControls();
    this.renderJobCard();
    this.renderSafetyGate();
    this.renderEvidence();
    this.renderDefectButtons();
    this.renderTerminal();
    this.renderAIChat();
    this.renderAlerts();
    this.renderModelLibrary();
    this.renderPresets();
    this.renderViewerScene();
    this.renderBodyState();
  },

  renderNavigation() {
    const signature =
      RuntimeState.currentNav +
      "|" +
      RuntimeState.focusPanelId;

    if (this.previous.navigation === signature) {
      return;
    }

    DOM.navItems.forEach(function toggleNavigation(button) {
      button.classList.toggle(
        "active",
        button.dataset.nav === RuntimeState.currentNav
      );
    });

    DOM.panels.forEach(function togglePanelFocus(panel) {
      panel.classList.toggle(
        "is-focused",
        panel.id === RuntimeState.focusPanelId
      );
    });

    this.previous.navigation = signature;
  },

  renderRuntimeLabels() {
    const labels = getActiveRuntimeLabels();

    if (
      this.previous.runtimeMode !==
      labels.runtimeMode &&
      DOM.runtimeMode
    ) {
      DOM.runtimeMode.textContent =
        labels.runtimeMode;
      this.previous.runtimeMode =
        labels.runtimeMode;
    }

    if (
      this.previous.runtimeStateText !==
      labels.runtimeStateText &&
      DOM.runtimeStateText
    ) {
      DOM.runtimeStateText.textContent =
        labels.runtimeStateText;
      this.previous.runtimeStateText =
        labels.runtimeStateText;
    }
  },

  renderStageRail() {
    if (!DOM.stageRail) {
      return;
    }

    const signature = RuntimeState.currentStage;

    if (this.previous.stageRail === signature) {
      return;
    }

    DOM.stageRail.innerHTML =
      STAGE_LIBRARY
        .map(
          function toMarkup(stage) {
            const classes = [
              "stage-tab",
              stage.id === RuntimeState.currentStage
                ? "active"
                : ""
            ]
              .filter(Boolean)
              .join(" ");

            return (
              '<button class="' +
              classes +
              '" data-stage="' +
              escapeHtml(stage.id) +
              '" type="button">' +
              escapeHtml(stage.label) +
              "</button>"
            );
          }
        )
        .join("");

    this.previous.stageRail = signature;
  },

  renderTemperatures() {
    const nozzle =
      RuntimeState.nozzleTemp.toFixed(1) + "°C";
    const bed =
      RuntimeState.bedTemp.toFixed(1) + "°C";

    if (
      this.previous.nozzleTemp !== nozzle &&
      DOM.nozzleTemp
    ) {
      DOM.nozzleTemp.textContent = nozzle;
      this.previous.nozzleTemp = nozzle;
    }

    if (
      this.previous.bedTemp !== bed &&
      DOM.bedTemp
    ) {
      DOM.bedTemp.textContent = bed;
      this.previous.bedTemp = bed;
    }
  },

  renderSpeed() {
    const speed =
      RuntimeState.printSpeed + " мм/с";

    if (
      this.previous.printSpeed !== speed &&
      DOM.printSpeed
    ) {
      DOM.printSpeed.textContent = speed;
      this.previous.printSpeed = speed;
    }
  },

  renderFlowRate() {
    const flow =
      RuntimeState.flowRate + "%";

    if (
      this.previous.flowRate !== flow &&
      DOM.flowValue
    ) {
      DOM.flowValue.textContent = flow;
      this.previous.flowRate = flow;
    }
  },

  renderVibration() {
    const vibration =
      RuntimeState.vibration.toFixed(2);

    if (
      this.previous.vibration !== vibration &&
      DOM.vibrationValue
    ) {
      DOM.vibrationValue.textContent =
        vibration;
      this.previous.vibration = vibration;
    }
  },

  renderTelemetryTrends() {
    const labels = getTelemetryTrendLabels();

    if (
      this.previous.nozzleTrend !== labels.nozzle &&
      DOM.nozzleTrend
    ) {
      DOM.nozzleTrend.textContent = labels.nozzle;
      this.previous.nozzleTrend = labels.nozzle;
    }

    if (
      this.previous.bedTrend !== labels.bed &&
      DOM.bedTrend
    ) {
      DOM.bedTrend.textContent = labels.bed;
      this.previous.bedTrend = labels.bed;
    }

    if (
      this.previous.speedTrend !== labels.speed &&
      DOM.speedTrend
    ) {
      DOM.speedTrend.textContent = labels.speed;
      this.previous.speedTrend = labels.speed;
    }

    if (
      this.previous.vibrationTrend !== labels.vibration &&
      DOM.vibrationTrend
    ) {
      DOM.vibrationTrend.textContent = labels.vibration;
      this.previous.vibrationTrend =
        labels.vibration;
    }
  },

  renderViewerState() {
    const labels = getActiveRuntimeLabels();

    if (
      this.previous.viewerState !==
      labels.viewerStatus &&
      DOM.viewerState
    ) {
      DOM.viewerState.textContent =
        labels.viewerStatus;
      this.previous.viewerState =
        labels.viewerStatus;
    }
  },

  renderAIConfidence() {
    const confidence =
      Math.round(RuntimeState.aiConfidence) + "%";

    if (
      this.previous.aiConfidence !==
      confidence &&
      DOM.aiConfidence
    ) {
      DOM.aiConfidence.textContent =
        confidence;
      this.previous.aiConfidence =
        confidence;
    }
  },

  renderControls() {
    const speed =
      RuntimeState.printSpeed + " мм/с";
    const flow =
      RuntimeState.flowRate + "%";
    const layer =
      RuntimeState.layerHeight.toFixed(2) + " мм";
    const infill =
      RuntimeState.infillDensity + "%";
    const nozzle =
      Math.round(RuntimeState.nozzleTemp) + "°C";

    if (
      this.previous.speedValue !== speed &&
      DOM.speedValue
    ) {
      DOM.speedValue.textContent = speed;
      this.previous.speedValue = speed;
    }

    if (DOM.speedControl) {
      const nextSpeed =
        String(RuntimeState.printSpeed);

      if (DOM.speedControl.value !== nextSpeed) {
        DOM.speedControl.value = nextSpeed;
      }
    }

    if (
      this.previous.flowValue !== flow &&
      DOM.flowValue
    ) {
      DOM.flowValue.textContent = flow;
      this.previous.flowValue = flow;
    }

    if (DOM.flowControl) {
      const nextFlow =
        String(RuntimeState.flowRate);

      if (DOM.flowControl.value !== nextFlow) {
        DOM.flowControl.value = nextFlow;
      }
    }

    if (
      this.previous.layerHeight !== layer &&
      DOM.layerHeightValue
    ) {
      DOM.layerHeightValue.textContent =
        layer;
      this.previous.layerHeight = layer;
    }

    if (DOM.layerHeightControl) {
      const nextLayer =
        String(
          Math.round(RuntimeState.layerHeight * 100)
        );

      if (
        DOM.layerHeightControl.value !==
        nextLayer
      ) {
        DOM.layerHeightControl.value = nextLayer;
      }
    }

    if (
      this.previous.infillDensity !== infill &&
      DOM.infillValue
    ) {
      DOM.infillValue.textContent = infill;
      this.previous.infillDensity = infill;
    }

    if (DOM.infillControl) {
      const nextInfill =
        String(RuntimeState.infillDensity);

      if (DOM.infillControl.value !== nextInfill) {
        DOM.infillControl.value = nextInfill;
      }
    }

    if (
      this.previous.nozzleControlValue !== nozzle &&
      DOM.nozzleControlValue
    ) {
      DOM.nozzleControlValue.textContent =
        nozzle;
      this.previous.nozzleControlValue = nozzle;
    }

    if (DOM.nozzleControl) {
      const nextNozzle =
        String(Math.round(RuntimeState.nozzleTemp));

      if (DOM.nozzleControl.value !== nextNozzle) {
        DOM.nozzleControl.value = nextNozzle;
      }
    }

    if (
      DOM.aiOptimizationToggle &&
      DOM.aiOptimizationToggle.checked !==
      RuntimeState.aiOptimizationEnabled
    ) {
      DOM.aiOptimizationToggle.checked =
        RuntimeState.aiOptimizationEnabled;
    }

    if (
      DOM.supportToggle &&
      DOM.supportToggle.checked !==
      RuntimeState.supportsEnabled
    ) {
      DOM.supportToggle.checked =
        RuntimeState.supportsEnabled;
    }

    if (DOM.pausePrintButton) {
      DOM.pausePrintButton.textContent =
        RuntimeState.isPaused ? "Продолжить" : "Пауза";
      DOM.pausePrintButton.disabled =
        !RuntimeState.isPrinting;
    }

    if (DOM.stopPrintButton) {
      DOM.stopPrintButton.disabled =
        (getJobLifecycle() === "stopped" ||
        getJobLifecycle() === "completed") ||
        (!RuntimeState.isPrinting &&
        RuntimeState.progress <= 18.1 &&
        RuntimeState.activeDefectId === "none");
    }
  },

  renderJobCard() {
    const progressPercent =
      Math.round(RuntimeState.progress) + "%";
    const progressValue =
      RuntimeState.progress.toFixed(1) + "%";
    const layerText =
      "Слой " +
      RuntimeState.currentLayer +
      " / " +
      RuntimeState.totalLayers;
    const timeRemaining =
      formatRemainingMinutes(
        RuntimeState.timeRemainingMinutes
      );
    const command =
      RuntimeState.currentCommand;
    const jobStatus =
      getJobDisplayStatusText();

    if (
      this.previous.jobProgressPercent !== progressPercent &&
      DOM.jobProgressPercent
    ) {
      DOM.jobProgressPercent.textContent =
        progressPercent;
      this.previous.jobProgressPercent =
        progressPercent;
    }

    if (
      this.previous.jobStatusText !== jobStatus &&
      DOM.jobStatusText
    ) {
      DOM.jobStatusText.textContent =
        jobStatus;
      this.previous.jobStatusText = jobStatus;
    }

    if (
      this.previous.layerProgressText !== layerText &&
      DOM.layerProgressText
    ) {
      DOM.layerProgressText.textContent =
        layerText;
      this.previous.layerProgressText = layerText;
    }

    if (
      this.previous.timeRemainingText !== timeRemaining &&
      DOM.timeRemainingText
    ) {
      DOM.timeRemainingText.textContent =
        timeRemaining;
      this.previous.timeRemainingText =
        timeRemaining;
    }

    if (
      this.previous.currentCommandText !== command &&
      DOM.currentCommandText
    ) {
      DOM.currentCommandText.textContent =
        command;
      this.previous.currentCommandText =
        command;
    }

    if (DOM.jobProgressBar) {
      DOM.jobProgressBar.style.setProperty(
        "--job-progress",
        progressValue
      );
      DOM.jobProgressBar.setAttribute(
        "aria-valuenow",
        String(Math.round(RuntimeState.progress))
      );
    }

    if (DOM.startPrintButton) {
      DOM.startPrintButton.disabled =
        RuntimeState.isPrinting;
    }
  },

  renderSafetyGate() {
    const status =
      RuntimeState.safetyGate.status;
    const detail =
      RuntimeState.safetyGate.detail;
    const correction =
      RuntimeState.safetyGate.appliedCorrection;
    const correctionText =
      correction
        ? "Δv " +
          correction.speedDelta +
          "% • ΔT " +
          correction.tempDelta +
          "°C • Δflow " +
          correction.flowDelta +
          "%"
        : "Нет примененных команд.";

    if (
      this.previous.safetyGateStatus !== status &&
      DOM.safetyGateStatus
    ) {
      DOM.safetyGateStatus.textContent = status;
      this.previous.safetyGateStatus = status;
    }

    if (
      this.previous.safetyGateDetail !== detail &&
      DOM.safetyGateDetail
    ) {
      DOM.safetyGateDetail.textContent = detail;
      this.previous.safetyGateDetail = detail;
    }

    if (
      this.previous.correctionSummary !== correctionText &&
      DOM.correctionSummary
    ) {
      DOM.correctionSummary.textContent =
        correctionText;
      this.previous.correctionSummary =
        correctionText;
    }
  },

  renderEvidence() {
    const frameText =
      "#" + RuntimeState.metrics.runtimeTicks;
    const timestampText =
      nowTime();

    if (
      this.previous.evidenceFrameId !== frameText &&
      DOM.evidenceFrameId
    ) {
      DOM.evidenceFrameId.textContent =
        frameText;
      this.previous.evidenceFrameId =
        frameText;
    }

    if (DOM.evidenceTimestamp) {
      DOM.evidenceTimestamp.textContent =
        timestampText;
    }
  },

  renderDefectButtons() {
    if (!DOM.defectButtons) {
      return;
    }

    const signature =
      RuntimeState.activeDefectId;

    if (this.previous.defectButtons === signature) {
      return;
    }

    DOM.defectButtons.innerHTML =
      DEFECT_LIBRARY
        .map(
          function toMarkup(defect) {
            const classes = [
              "defect-button",
              defect.id === RuntimeState.activeDefectId
                ? "active"
                : ""
            ]
              .filter(Boolean)
              .join(" ");

            return (
              '<button class="' +
              classes +
              '" data-defect="' +
              escapeHtml(defect.id) +
              '" type="button">' +
              escapeHtml(defect.label) +
              "</button>"
            );
          }
        )
        .join("");

    this.previous.defectButtons = signature;
  },

  renderTerminal() {
    if (!DOM.terminalOutput) {
      return;
    }

    const signature =
      RuntimeState.terminalFeed
        .map(
          function toSignature(entry) {
            return entry.time + entry.message + entry.type;
          }
        )
        .join("|");

    if (this.previous.terminalFeed === signature) {
      return;
    }

    DOM.terminalOutput.innerHTML =
      RuntimeState.terminalFeed
        .map(
          function toMarkup(entry) {
            return (
              '<div class="terminal-line terminal-' +
              escapeHtml(entry.type) +
              '">' +
              '<div class="terminal-time">' +
              escapeHtml(entry.time) +
              "</div>" +
              '<div class="terminal-message">' +
              escapeHtml(entry.message) +
              "</div>" +
              "</div>"
            );
          }
        )
        .join("");

    this.previous.terminalFeed = signature;
  },

  renderAIChat() {
    if (!DOM.aiChat) {
      return;
    }

    const signature =
      RuntimeState.aiMessages
        .map(
          function toSignature(message) {
            return message.role + ":" + message.text;
          }
        )
        .join("|");

    if (this.previous.aiMessages === signature) {
      return;
    }

    DOM.aiChat.innerHTML =
      RuntimeState.aiMessages
        .map(
          function toMarkup(message) {
            const roleClass =
              "ai-message " + escapeHtml(message.role);
            const avatar =
              message.role === "user" ? "OP" : "NX";

            return (
              '<div class="' + roleClass + '">' +
              '<div class="ai-avatar">' +
              escapeHtml(avatar) +
              "</div>" +
              '<div class="ai-bubble">' +
              escapeHtml(message.text) +
              "</div>" +
              "</div>"
            );
          }
        )
        .join("");

    DOM.aiChat.scrollTop = DOM.aiChat.scrollHeight;
    this.previous.aiMessages = signature;
  },

  renderAlerts() {
    if (!DOM.alertsFeed) {
      return;
    }

    const signature =
      RuntimeState.alerts
        .map(
          function toSignature(alert) {
            return alert.level + alert.message + alert.time;
          }
        )
        .join("|");

    if (this.previous.alerts === signature) {
      return;
    }

    DOM.alertsFeed.innerHTML =
      RuntimeState.alerts
        .map(
          function toMarkup(alert) {
            return (
              '<div class="alert-item level-' +
              escapeHtml(alert.level.toLowerCase()) +
              '">' +
              '<div class="alert-level">' +
              escapeHtml(alert.level) +
              "</div>" +
              '<div class="alert-message">' +
              escapeHtml(alert.message) +
              "</div>" +
              "</div>"
            );
          }
        )
        .join("");

    this.previous.alerts = signature;
  },

  renderModelLibrary() {
    if (!DOM.modelList) {
      return;
    }

    const signature =
      RuntimeState.selectedModelId +
      "|" +
      String(RuntimeState.modelLoading);

    if (this.previous.modelList === signature) {
      return;
    }

    DOM.modelList.innerHTML =
      MODEL_LIBRARY
        .map(
          function toMarkup(model) {
            const isActive =
              model.id === RuntimeState.selectedModelId;
            const isLoading =
              isActive && RuntimeState.modelLoading;
            const classes = [
              "model-card",
              isActive ? "active" : "",
              isLoading ? "loading" : ""
            ]
              .filter(Boolean)
              .join(" ");
            const previewClassMap = {
              "turbine-housing": "preview-impeller",
              "robot-gripper": "preview-bracket",
              "cooling-duct": "preview-duct",
              "sensor-bracket": "preview-manifold",
              "precision-jig": "preview-valve"
            };
            const previewClass =
              previewClassMap[model.id] || "preview-valve";

            return (
              '<button class="' +
              classes +
              '" data-model="' +
              escapeHtml(model.id) +
              '" type="button">' +
              '<div class="model-preview ' +
              escapeHtml(previewClass) +
              '">' +
              '<div class="preview-grid"></div>' +
              '<div class="preview-shape"></div>' +
              '<div class="model-preview-code">' +
              escapeHtml(model.preview) +
              "</div>" +
              "</div>" +
              '<div class="model-info">' +
              '<div class="model-name">' +
              escapeHtml(model.name) +
              "</div>" +
              '<div class="model-meta">' +
              escapeHtml(
                isLoading ? "Загрузка профиля..." : model.meta
              ) +
              "</div>" +
              "</div>" +
              "</button>"
            );
          }
        )
        .join("");

    this.previous.modelList = signature;
  },

  renderPresets() {
    if (!DOM.presetGrid) {
      return;
    }

    const signature =
      RuntimeState.selectedPresetId;

    if (this.previous.presetGrid === signature) {
      return;
    }

    DOM.presetGrid.innerHTML =
      PRESET_LIBRARY
        .map(
          function toMarkup(preset) {
            const classes = [
              "preset-card",
              preset.id === RuntimeState.selectedPresetId
                ? "active"
                : ""
            ]
              .filter(Boolean)
              .join(" ");

            return (
              '<button class="' +
              classes +
              '" data-preset="' +
              escapeHtml(preset.id) +
              '" type="button">' +
              '<div class="preset-top">' +
              '<div class="preset-name">' +
              escapeHtml(preset.name) +
              "</div>" +
              '<div class="preset-badge">' +
              escapeHtml(String(preset.printSpeed)) +
              "</div>" +
              "</div>" +
              '<div class="preset-meta">' +
              escapeHtml(preset.meta) +
              "</div>" +
              '<div class="preset-specs">' +
              "<span>" + escapeHtml(preset.layerHeight.toFixed(2) + " мм") + "</span>" +
              "<span>" + escapeHtml(String(preset.infillDensity) + "% infill") + "</span>" +
              "<span>" + escapeHtml(String(preset.nozzleTemp) + "°C") + "</span>" +
              "</div>" +
              "</button>"
            );
          }
        )
        .join("");

    this.previous.presetGrid = signature;
  },

  renderViewerScene() {
    const model = getSelectedModel();
    const preset = getSelectedPreset();
    const metrics = getDerivedPrintMetrics();
    const layerRatio =
      clamp(
        RuntimeState.currentLayer /
        RuntimeState.totalLayers,
        0,
        1
      );
    const pathRatio =
      clamp(RuntimeState.progress / 100, 0, 1);
    const lifecycle = getJobLifecycle();
    const motionSeed =
      RuntimeState.isPrinting && !RuntimeState.isPaused
        ? RuntimeState.metrics.runtimeTicks
        : Math.round(RuntimeState.progress * 4);
    const toolX =
      18 +
      ((motionSeed * 9 + RuntimeState.currentLayer) % 64);
    const toolY =
      14 +
      ((motionSeed * 7 + Math.round(RuntimeState.progress)) % 44);
    const buildHeight =
      18 + Math.round(layerRatio * 88);
    const buildWidth =
      28 + Math.round(pathRatio * 26);
    const stageCopyMap = {
      prepare: "Подготовка",
      preview: "Предпросмотр",
      monitor: "Мониторинг"
    };
    const hintMap = {
      prepare:
        "Подготовка модели к нарезке и проверка параметров профиля",
      preview:
        "Послойный анализ траекторий, зон риска и времени цикла",
      monitor:
        lifecycle === "paused"
          ? "Печать поставлена на паузу. Телеметрия и траектория заморожены"
          : lifecycle === "completed"
            ? "Цикл завершен. Доступен итоговый анализ траектории и отклонений"
            : lifecycle === "stopped"
              ? "Цикл остановлен оператором. Контур удерживает финальное состояние кадра"
              : RuntimeState.monitorViewMode === "3d"
                ? "Трехмерная симуляция движения сопла и роста модели в реальном времени"
                : "Плоский мониторинг слоя, траектории и Safety Layer в реальном времени"
    };
    const actionHintMap = {
      prepare: "Готово к предпросмотру",
      preview: "Послойный анализ активен",
      monitor:
        lifecycle === "paused"
          ? "Пауза по команде оператора"
          : lifecycle === "completed"
            ? "Печать завершена"
            : lifecycle === "stopped"
              ? "Сцена зафиксирована. Возможен перезапуск"
              : RuntimeState.monitorViewMode === "3d"
                ? "3D-контур синхронизирован"
                : "2D-контур синхронизирован"
    };
    const previewClassMap = {
      "turbine-housing": "preview-impeller",
      "robot-gripper": "preview-bracket",
      "cooling-duct": "preview-duct",
      "sensor-bracket": "preview-manifold",
      "precision-jig": "preview-valve"
    };
    const modelWaveMap = {
      "turbine-housing": 1.4,
      "robot-gripper": 1.1,
      "cooling-duct": 1.75,
      "sensor-bracket": 1.25,
      "precision-jig": 0.9
    };
    const layerWave =
      modelWaveMap[model.id] || 1.05;
    const signature = [
      RuntimeState.currentStage,
      RuntimeState.selectedModelId,
      RuntimeState.selectedPresetId,
      RuntimeState.supportsEnabled,
      RuntimeState.aiOptimizationEnabled,
      RuntimeState.currentLayer,
      RuntimeState.totalLayers,
      Math.round(RuntimeState.progress),
      RuntimeState.runtime,
      lifecycle,
      RuntimeState.monitorViewMode,
      RuntimeState.currentCommand,
      RuntimeState.modelLoading,
      RuntimeState.activeDefectId,
      RuntimeState.viewerCameraTilt,
      RuntimeState.viewerCameraSpin,
      RuntimeState.viewerCameraZoom
    ].join("|");

    renderViewerCanvas();

    if (this.previous.viewerScene === signature) {
      return;
    }

    if (DOM.viewerMachineLabel) {
      DOM.viewerMachineLabel.textContent =
        "Anycubic Mega X · 300×300×305 · NX Runtime";
    }

    if (DOM.viewerProfileLabel) {
      DOM.viewerProfileLabel.textContent =
        "Профиль: " + preset.name;
    }

    if (DOM.viewerSupportLabel) {
      DOM.viewerSupportLabel.textContent =
        "Поддержки: " +
        (RuntimeState.supportsEnabled
          ? "Адаптивно"
          : "Отключены");
    }

    if (DOM.viewerPrepareHint) {
      DOM.viewerPrepareHint.textContent =
        model.name +
        " · " +
        Math.round(metrics.materialGrams) +
        " г · " +
        formatRemainingMinutes(metrics.estimatedMinutes);
    }

    if (DOM.viewerMonitorHint) {
      DOM.viewerMonitorHint.textContent =
        "Объемная печать по траекториям. Видно сопло, филамент и рост детали по слоям.";
    }

    if (DOM.viewerModelGhost) {
      DOM.viewerModelGhost.className =
        "viewer-model-ghost " +
        (previewClassMap[model.id] || "preview-valve");
    }

    if (DOM.viewerLayerStack) {
      DOM.viewerLayerStack.innerHTML =
        new Array(28)
          .fill("")
          .map(function createLayer(_, index) {
            const threshold =
              (index + 1) / 28;
            const normalized =
              index / 27;
            const envelope =
              0.62 +
              (Math.sin(
                (normalized * Math.PI * 2 * layerWave) +
                (layerWave * 0.4)
              ) * 0.18) +
              (Math.cos(
                normalized * Math.PI * (layerWave + 0.65)
              ) * 0.08);
            const width =
              Math.round(
                clamp(38 + (envelope * 34), 34, 86)
              );
            const availableOffset =
              Math.max(0, 100 - width);
            const offset =
              clamp(
                (availableOffset / 2) +
                (Math.sin(
                  (normalized * Math.PI * 3.4) +
                  layerWave
                ) * 8),
                0,
                availableOffset
              );
            const type =
              index > 22
                ? "shell"
                : index % 6 === 0
                  ? "support"
                  : index % 4 === 0
                    ? "travel"
                    : "infill";
            const classes = [
              "viewer-slice-line",
              type,
              layerRatio >= threshold
                ? "active"
                : "",
              RuntimeState.runtime === "warning" &&
              index > 18
                ? "risk"
                : ""
            ]
              .filter(Boolean)
              .join(" ");

            return (
              '<span class="' +
              classes +
              '" style="width:' +
              width +
              '%; margin-left:' +
              offset +
              '%;' +
              '"></span>'
            );
          })
          .join("");
    }

    if (DOM.viewerLayerFill) {
      DOM.viewerLayerFill.style.height =
        Math.max(8, Math.round(layerRatio * 100)) +
        "%";
    }

    if (DOM.viewerPathFill) {
      DOM.viewerPathFill.style.width =
        Math.max(10, Math.round(pathRatio * 100)) +
        "%";
    }

    if (DOM.viewerPathSweep) {
      DOM.viewerPathSweep.style.left =
        Math.round(pathRatio * 72) + "%";
    }

    if (DOM.viewerPreviewLayerValue) {
      DOM.viewerPreviewLayerValue.textContent =
        RuntimeState.currentLayer +
        " / " +
        RuntimeState.totalLayers;
    }

    if (DOM.viewerPreviewPathValue) {
      DOM.viewerPreviewPathValue.textContent =
        Math.round(RuntimeState.progress) + "%";
    }

    if (DOM.viewer3DBuild) {
      const buildLayers =
        Math.max(
          8,
          Math.round(14 + (layerRatio * 24))
        );
      const weakFrom =
        RuntimeState.activeDefectId !== "none"
          ? Math.max(0, buildLayers - 4)
          : Number.POSITIVE_INFINITY;

      DOM.viewer3DBuild.innerHTML =
        '<div class="viewer-3d-build-core"></div>' +
        '<div class="viewer-3d-build-layers">' +
        new Array(buildLayers)
          .fill("")
          .map(function createBuildLayer(_, index) {
            const isWeak = index >= weakFrom;
            const isHot =
              RuntimeState.isPrinting &&
              !RuntimeState.isPaused &&
              index === (buildLayers - 1);
            const width =
              Math.round(
                clamp(
                  62 +
                  (Math.sin(
                    (index / buildLayers) *
                    Math.PI *
                    (1.8 + layerWave)
                  ) * 20),
                  52,
                  94
                )
              );
            const offset =
              Math.round((100 - width) / 2);
            const className = [
              "viewer-3d-build-layer",
              isWeak ? "weak" : "",
              isHot ? "hot" : ""
            ]
              .filter(Boolean)
              .join(" ");

            return (
              '<span class="' +
              className +
              '" style="width:' +
              width +
              '%; margin-left:' +
              offset +
              '%;"></span>'
            );
          })
          .join("") +
        "</div>";
    }

    if (DOM.viewerInspectorStage) {
      DOM.viewerInspectorStage.textContent =
        stageCopyMap[RuntimeState.currentStage] ||
        "Подготовка";
    }

    if (DOM.viewerInspectorModel) {
      DOM.viewerInspectorModel.textContent =
        model.name;
    }

    if (DOM.viewerInspectorLayer) {
      DOM.viewerInspectorLayer.textContent =
        RuntimeState.currentLayer +
        " / " +
        RuntimeState.totalLayers +
        " · " +
        Math.round(RuntimeState.progress) +
        "%";
    }

    if (DOM.viewerInspectorRisk) {
      DOM.viewerInspectorRisk.textContent =
        getRiskLabel();
    }

    if (DOM.viewerInspectorEta) {
      DOM.viewerInspectorEta.textContent =
        formatRemainingMinutes(
          RuntimeState.timeRemainingMinutes
        );
    }

    if (DOM.viewerInspectorSupport) {
      DOM.viewerInspectorSupport.textContent =
        (RuntimeState.supportsEnabled
          ? "Опоры вкл"
          : "Опоры выкл") +
        " · " +
        metrics.materialGrams.toFixed(1) +
        " г";
    }

    if (DOM.viewerStageHint) {
      DOM.viewerStageHint.textContent =
        hintMap[RuntimeState.currentStage] ||
        hintMap.prepare;
    }

    if (DOM.viewerActionHint) {
      DOM.viewerActionHint.textContent =
        actionHintMap[RuntimeState.currentStage] ||
        actionHintMap.prepare;
    }

    if (DOM.viewerMonitorModeButtons.length) {
      DOM.viewerMonitorModeButtons.forEach(
        function updateMonitorButton(button) {
          button.classList.toggle(
            "active",
            button.dataset.monitorView ===
              RuntimeState.monitorViewMode
          );
        }
      );
    }

    if (DOM.viewerCore) {
      DOM.viewerCore.dataset.stage =
        RuntimeState.currentStage;
      DOM.viewerCore.dataset.monitorView = "3d";
      DOM.viewerCore.dataset.model = model.id;
      DOM.viewerCore.classList.toggle(
        "is-dragging",
        ViewerPointerState.active
      );
      DOM.viewerCore.style.setProperty(
        "--monitor-tool-x",
        toolX + "%"
      );
      DOM.viewerCore.style.setProperty(
        "--monitor-tool-y",
        toolY + "%"
      );
      DOM.viewerCore.style.setProperty(
        "--monitor-build-height",
        buildHeight + "px"
      );
      DOM.viewerCore.style.setProperty(
        "--monitor-build-width",
        buildWidth + "%"
      );
      DOM.viewerCore.style.setProperty(
        "--monitor-layer-glow",
        Math.max(0.2, layerRatio).toFixed(2)
      );
      DOM.viewerCore.style.setProperty(
        "--viewer-tilt",
        RuntimeState.viewerCameraTilt + "deg"
      );
      DOM.viewerCore.style.setProperty(
        "--viewer-spin",
        RuntimeState.viewerCameraSpin + "deg"
      );
      DOM.viewerCore.style.setProperty(
        "--viewer-scale",
        RuntimeState.viewerCameraZoom.toFixed(3)
      );
      DOM.viewerCore.style.setProperty(
        "--viewer-filament",
        RuntimeState.runtime === "critical"
          ? "rgba(255,116,92,0.94)"
          : RuntimeState.runtime === "warning"
            ? "rgba(132,238,255,0.92)"
            : "rgba(104,232,255,0.92)"
      );
    }

    this.previous.viewerScene = signature;
  },

  renderBodyState() {
    if (
      this.previous.runtime !== RuntimeState.runtime &&
      DOM.body
    ) {
      DOM.body.dataset.runtime =
        RuntimeState.runtime;
      this.previous.runtime =
        RuntimeState.runtime;
    }

    if (DOM.body) {
      DOM.body.dataset.stage =
        RuntimeState.currentStage;
      DOM.body.dataset.nav =
        RuntimeState.currentNav;
      DOM.body.dataset.job =
        getJobLifecycle();
      DOM.body.dataset.monitorView =
        RuntimeState.monitorViewMode;
    }
  }
};

/* =========================================
   LEGACY BRIDGE
========================================= */

function updateDOM() {
  UIRender.render();
}

function applySafetyCheckedCorrection(command, reason) {
  const rawSpeedDelta =
    Number(command.speedDelta || 0);
  const rawTempDelta =
    Number(command.tempDelta || 0);
  const rawFlowDelta =
    Number(command.flowDelta || 0);

  const bounded = {
    speedDelta: clamp(rawSpeedDelta, -18, 8),
    tempDelta: clamp(rawTempDelta, -8, 6),
    flowDelta: clamp(rawFlowDelta, -10, 8)
  };

  const clippedFields = [];

  if (bounded.speedDelta !== rawSpeedDelta) {
    clippedFields.push("speed");
  }

  if (bounded.tempDelta !== rawTempDelta) {
    clippedFields.push("temp");
  }

  if (bounded.flowDelta !== rawFlowDelta) {
    clippedFields.push("flow");
  }

  RuntimeState.safetyGate.pendingCorrection = {
    source: reason,
    speedDelta: rawSpeedDelta,
    tempDelta: rawTempDelta,
    flowDelta: rawFlowDelta
  };

  RuntimeState.printSpeed = clamp(
    Math.round(
      RuntimeState.printSpeed *
      (1 + bounded.speedDelta / 100)
    ),
    40,
    220
  );

  RuntimeState.nozzleTemp = clamp(
    RuntimeState.nozzleTemp + bounded.tempDelta,
    180,
    280
  );

  RuntimeState.flowRate = clamp(
    Math.round(
      RuntimeState.flowRate *
      (1 + bounded.flowDelta / 100)
    ),
    80,
    140
  );

  RuntimeState.vibration = clamp(
    RuntimeState.vibration - 0.05,
    0.08,
    0.48
  );

  RuntimeState.safetyGate.appliedCorrection = {
    source: reason,
    speedDelta: bounded.speedDelta,
    tempDelta: bounded.tempDelta,
    flowDelta: bounded.flowDelta,
    clippedFields
  };

  RuntimeState.safetyGate.status =
    clippedFields.length > 0
      ? "ОГРАНИЧЕНО"
      : "ПРИМЕНЕНО";

  RuntimeState.safetyGate.detail =
    clippedFields.length > 0
      ? "Safety Layer ограничил команду: " +
        clippedFields.join(", ") +
        "."
      : "Команда прошла в рабочем диапазоне.";

  RuntimeEvents.emit(
    "terminal:message",
    {
      message:
        "Safety Layer применил корректировку от " +
        reason +
        ".",
      type: "safety"
    }
  );
}

/* =========================================
   RUNTIME ACTIONS
========================================= */

const RuntimeActions = {
  selectNavigation(navId) {
    const navConfig =
      getNavigationConfig(navId);

    setWorkspaceContext(
      navConfig.id,
      navConfig.stage,
      navConfig.focusPanelId
    );

    RuntimeEvents.emit(
      "terminal:message",
      {
        message:
          "Активирован раздел: " +
          navId +
          ".",
        type: "navigation"
      }
    );

    RuntimeEvents.emit("ui:render", {});
  },

  selectStage(stageId) {
    if (
      !STAGE_LIBRARY.some(function hasStage(stage) {
        return stage.id === stageId;
      })
    ) {
      return;
    }

    const nextNav =
      getDefaultNavForStage(stageId);

    setWorkspaceContext(
      nextNav,
      stageId,
      stageId === "prepare"
        ? "slicerPanel"
        : "viewerPanel"
    );

    RuntimeEvents.emit(
      "terminal:message",
      {
        message:
          "Активирована стадия: " + stageId + ".",
        type: "stage"
      }
    );

    RuntimeEvents.emit("ui:render", {});
  },

  setMonitorViewMode(mode) {
    if (mode !== "3d") {
      return;
    }

    RuntimeState.monitorViewMode = "3d";
    setWorkspaceContext(
      "monitoring",
      "monitor",
      "viewerPanel"
    );

    RuntimeEvents.emit(
      "terminal:message",
      {
        message:
          "Переключен режим мониторинга: " + mode.toUpperCase() + ".",
        type: "viewer"
      }
    );

    RuntimeEvents.emit("ui:render", {});
  },

  setViewerCamera(deltaX, deltaY) {
    RuntimeState.viewerCameraSpin +=
      deltaX * 0.18;

    if (RuntimeState.viewerCameraSpin > 180) {
      RuntimeState.viewerCameraSpin -= 360;
    }

    if (RuntimeState.viewerCameraSpin < -180) {
      RuntimeState.viewerCameraSpin += 360;
    }

    RuntimeState.viewerCameraTilt = clamp(
      RuntimeState.viewerCameraTilt - (deltaY * 0.14),
      20,
      86
    );

    RuntimeEvents.emit("ui:render", {});
  },

  setViewerZoom(delta) {
    RuntimeState.viewerCameraZoom = clamp(
      RuntimeState.viewerCameraZoom + delta,
      0.32,
      2.05
    );

    RuntimeEvents.emit("ui:render", {});
  },

  resetViewerCamera() {
    RuntimeState.viewerCameraTilt = 60;
    RuntimeState.viewerCameraSpin = -22;
    RuntimeState.viewerCameraZoom = 1;
    RuntimeEvents.emit("ui:render", {});
  },

  startPrint() {
    if (RuntimeState.isPrinting && !RuntimeState.isPaused) {
      return;
    }

    if (
      RuntimeState.jobLifecycle === "idle" ||
      RuntimeState.jobLifecycle === "completed" ||
      RuntimeState.jobLifecycle === "stopped"
    ) {
      const metrics = getDerivedPrintMetrics();

      RuntimeState.progress = 0;
      RuntimeState.currentLayer = 1;
      RuntimeState.timeRemainingMinutes =
        metrics.estimatedMinutes;
      RuntimeState.currentCommand =
        MOCK_GCODE_STREAM[0];
      RuntimeState.safetyGate.pendingCorrection = null;
      RuntimeState.safetyGate.appliedCorrection = null;
      RuntimeState.activeDefectId = "none";
      RuntimeState.defectSeverity = 0;
      RuntimeState.runtime = "stable";
      RuntimeState.locks.critical = false;
      RuntimeState.locks.recovery = false;
      syncRuntimeLabels();
    }

    RuntimeState.isPrinting = true;
    RuntimeState.isPaused = false;
    RuntimeState.jobLifecycle = "running";
    setWorkspaceContext(
      "print",
      "monitor",
      "controlsPanel"
    );
    RuntimeState.safetyGate.status = "ГОТОВ";
    RuntimeState.safetyGate.detail =
      "Контур готов принимать ограниченные корректировки.";

    RuntimeEvents.emit(
      "terminal:message",
      {
        message:
          "Запущен демонстрационный цикл печати.",
        type: "job"
      }
    );

    RuntimeEvents.emit(
      "ai:response",
      {
        message:
          "Печать запущена. Отслеживаю состояние слоя, вибрации и тепловой резерв.",
        role: "assistant",
        payload: {
          category: "stable"
        }
      }
    );

    AudioManager.play("printStart");
    AudioManager.syncPrintLoop();
    RuntimeEvents.emit("ui:render", {});
  },

  stopPrint() {
    window.clearTimeout(RuntimeEngine.timers.recovery);
    window.clearTimeout(RuntimeEngine.timers.defectCorrection);
    RuntimeEngine.timers.recovery = null;
    RuntimeEngine.timers.defectCorrection = null;
    AIOrchestrator.reset();

    RuntimeState.isPrinting = false;
    RuntimeState.isPaused = false;
    RuntimeState.jobLifecycle = "stopped";
    RuntimeState.monitorViewMode = "3d";
    setWorkspaceContext(
      "print",
      "monitor",
      "controlsPanel"
    );
    RuntimeState.runtime = "stable";
    RuntimeState.nozzleTemp = clamp(
      RuntimeState.nozzleTemp,
      212,
      219
    );
    RuntimeState.bedTemp = clamp(
      RuntimeState.bedTemp,
      59,
      61
    );
    RuntimeState.vibration = clamp(
      RuntimeState.vibration,
      0.1,
      0.18
    );
    RuntimeState.aiConfidence = clamp(
      RuntimeState.aiConfidence,
      96,
      99
    );
    RuntimeState.activeDefectId = "none";
    RuntimeState.defectSeverity = 0;
    RuntimeState.locks.critical = false;
    RuntimeState.locks.recovery = false;
    RuntimeState.safetyGate.status = "ОЖИДАНИЕ";
    RuntimeState.safetyGate.detail =
      "Цикл остановлен. Runtime готов к повторному запуску с текущего экрана.";
    RuntimeState.safetyGate.pendingCorrection = null;
    RuntimeState.safetyGate.appliedCorrection = null;

    syncRuntimeLabels();
    pushAlert(
      "INFO",
      "Демоцикл остановлен оператором. Состояние кадра зафиксировано."
    );
    pushTerminalEntry(
      "Оператор остановил демонстрационный цикл. Контур удерживает текущий срез для анализа.",
      "job"
    );
    pushAIMessage(
      "Печать остановлена. Контур готов к повторному запуску или переключению обратно в подготовку.",
      "assistant"
    );

    AudioManager.play("printStop");
    AudioManager.syncPrintLoop();
    RuntimeEvents.emit("ui:render", {});
  },

  togglePause() {
    if (!RuntimeState.isPrinting) {
      return;
    }

    RuntimeState.isPaused = !RuntimeState.isPaused;
    RuntimeState.jobLifecycle =
      RuntimeState.isPaused
        ? "paused"
        : "running";
    setWorkspaceContext(
      "print",
      "monitor",
      "controlsPanel"
    );

    RuntimeEvents.emit(
      "terminal:message",
      {
        message: RuntimeState.isPaused
          ? "Цикл печати переведен в паузу."
          : "Цикл печати возобновлен.",
        type: "job"
      }
    );

    AudioManager.play(
      RuntimeState.isPaused
        ? "printPause"
        : "printResume"
    );
    AudioManager.syncPrintLoop();
    RuntimeEvents.emit("ui:render", {});
  },

  triggerDefect(defectId) {
    const defect =
      DEFECT_LIBRARY.find(function findDefect(item) {
        return item.id === defectId;
      });

    if (!defect) {
      return;
    }

    if (!RuntimeState.isPrinting) {
      this.startPrint();
    }

    setWorkspaceContext(
      "print",
      "monitor",
      "controlsPanel"
    );

    RuntimeState.activeDefectId = defect.id;
    RuntimeState.defectSeverity = defect.severity;

    if (defect.id === "spaghetti") {
      RuntimeState.flowRate = clamp(
        RuntimeState.flowRate - 8,
        80,
        140
      );
      RuntimeState.vibration = clamp(
        RuntimeState.vibration + 0.07,
        0.08,
        0.48
      );
      RuntimeState.nozzleTemp = clamp(
        RuntimeState.nozzleTemp + 4,
        180,
        280
      );
    } else if (defect.id === "layer-shift") {
      RuntimeState.vibration = clamp(
        RuntimeState.vibration + 0.08,
        0.08,
        0.48
      );
    } else if (defect.id === "underextrusion") {
      RuntimeState.flowRate = clamp(
        RuntimeState.flowRate - 10,
        80,
        140
      );
    } else if (defect.id === "warping") {
      RuntimeState.bedTemp = clamp(
        RuntimeState.bedTemp - 3,
        40,
        80
      );
    } else if (defect.id === "stringing") {
      RuntimeState.nozzleTemp = clamp(
        RuntimeState.nozzleTemp + 3,
        180,
        280
      );
    } else if (defect.id === "blobbing") {
      RuntimeState.flowRate = clamp(
        RuntimeState.flowRate + 6,
        80,
        140
      );
    }

    RuntimeEvents.emit(
      "terminal:message",
      {
        message:
          "Инжектирован дефект: " +
          defect.label +
          ".",
        type: "defect"
      }
    );

    pushAlert(
      defect.runtime === "critical"
        ? "CRITICAL"
        : "WARNING",
      "Обнаружен сценарий: " + defect.label + "."
    );

    RuntimeEvents.emit(
      "runtime:state",
      {
        state: defect.runtime,
        payload: {
          source: defect.id
        }
      }
    );

    if (RuntimeState.aiOptimizationEnabled) {
      window.clearTimeout(
        RuntimeEngine.timers.defectCorrection
      );

      RuntimeEngine.timers.defectCorrection =
        window.setTimeout(
        function autoCorrection() {
          RuntimeEngine.timers.defectCorrection =
            null;
          RuntimeActions.applyAICorrection(
            defect
          );
        },
        1100
        );
    }

    RuntimeEvents.emit("ui:render", {});
  },

  applyAICorrection(defect) {
    const sourceDefect =
      defect || getActiveDefect();

    if (!sourceDefect) {
      return;
    }

    const command = {
      speedDelta: sourceDefect.runtime === "critical"
        ? -22
        : -12,
      tempDelta: sourceDefect.id === "underextrusion"
        ? 4
        : sourceDefect.id === "stringing"
          ? -6
          : -3,
      flowDelta: sourceDefect.id === "underextrusion"
        ? 8
        : sourceDefect.id === "blobbing"
          ? -6
          : -3
    };

    applySafetyCheckedCorrection(
      command,
      "AI Copilot"
    );

    RuntimeState.activeDefectId = "none";
    RuntimeState.defectSeverity = 0;

    if (RuntimeState.runtime !== "critical") {
      RuntimeEvents.emit(
        "runtime:state",
        {
          state: "recovering",
          payload: {
            source: "safety-layer"
          }
        }
      );
    }

    RuntimeEvents.emit(
      "ai:response",
      {
        message:
          "Корректировка согласована через Safety Layer и применена в допустимом диапазоне.",
        role: "assistant",
        payload: {
          category: "recovery"
        }
      }
    );

    AudioManager.play("defectDetected");
    AudioManager.syncPrintLoop();
    RuntimeEvents.emit("ui:render", {});
  },

  setPrintSpeed(value) {
    const nextValue =
      clamp(Number(value), 40, 220);

    if (RuntimeState.printSpeed === nextValue) {
      return;
    }

    RuntimeState.printSpeed = nextValue;
    setWorkspaceContext(
      "print",
      "monitor",
      "controlsPanel"
    );
    RuntimeState.vibration = clamp(
      RuntimeState.vibration +
      (nextValue > 170 ? 0.02 : 0.005),
      0.08,
      0.48
    );

    RuntimeEvents.emit(
      "terminal:message",
      {
        message:
          "Скорость печати обновлена до " +
          nextValue +
          " мм/с.",
        type: "control"
      }
    );

    if (nextValue > 170) {
      AIOrchestrator.queue(
        "warning",
        "Обнаружено повышение вибрации. Рекомендуется снижение скорости."
      );
    }

    AudioManager.syncPrintLoop();
    RuntimeEvents.emit("ui:render", {});
  },

  setFlowRate(value) {
    const nextValue =
      clamp(Number(value), 80, 140);

    if (RuntimeState.flowRate === nextValue) {
      return;
    }

    RuntimeState.flowRate = nextValue;
    setWorkspaceContext(
      "print",
      "monitor",
      "controlsPanel"
    );

    RuntimeEvents.emit(
      "terminal:message",
      {
        message:
          "Компенсация потока изменена до " +
          nextValue +
          "%.",
        type: "control"
      }
    );

    AudioManager.syncPrintLoop();
    RuntimeEvents.emit("ui:render", {});
  },

  setNozzleTemperature(value) {
    const nextValue =
      clamp(Number(value), 180, 280);

    if (
      Math.round(RuntimeState.nozzleTemp) ===
      nextValue
    ) {
      return;
    }

    RuntimeState.nozzleTemp = nextValue;
    setWorkspaceContext(
      "slicing",
      "prepare",
      "slicerPanel"
    );

    RuntimeEvents.emit(
      "terminal:message",
      {
        message:
          "Температура сопла установлена на " +
          nextValue +
          "°C.",
        type: "control"
      }
    );

    RuntimeEvents.emit("ui:render", {});
  },

  setAIOptimization(enabled) {
    RuntimeState.aiOptimizationEnabled =
      Boolean(enabled);
    setWorkspaceContext(
      "slicing",
      "prepare",
      "slicerPanel"
    );

    RuntimeEvents.emit(
      "terminal:message",
      {
        message:
          RuntimeState.aiOptimizationEnabled
            ? "AI-оптимизация активирована."
            : "AI-оптимизация отключена.",
        type: "control"
      }
    );

    RuntimeEvents.emit(
      "ai:response",
      {
        message:
          RuntimeState.aiOptimizationEnabled
            ? "AI-контур снова участвует в компенсации траектории и потока."
            : "Переход к ручному управлению подтвержден. Автоматические рекомендации ограничены.",
        role: "assistant",
        payload: {
          category: "user_guidance"
        }
      }
    );

    RuntimeEvents.emit("ui:render", {});
  },

  setSupports(enabled) {
    RuntimeState.supportsEnabled =
      Boolean(enabled);
    setWorkspaceContext(
      "slicing",
      "prepare",
      "slicerPanel"
    );

    RuntimeEvents.emit(
      "terminal:message",
      {
        message:
          RuntimeState.supportsEnabled
            ? "Поддержки активированы для текущего профиля."
            : "Поддержки отключены для текущей геометрии.",
        type: "control"
      }
    );

    RuntimeEvents.emit("ui:render", {});
  },

  setLayerHeight(value) {
    const nextValue = clamp(
      Number(value) / 100,
      0.08,
      0.32
    );

    RuntimeState.layerHeight =
      Math.round(nextValue * 100) / 100;
    setWorkspaceContext(
      "slicing",
      "prepare",
      "slicerPanel"
    );

    RuntimeEvents.emit(
      "terminal:message",
      {
        message:
          "Высота слоя обновлена до " +
          RuntimeState.layerHeight.toFixed(2) +
          " мм.",
        type: "control"
      }
    );

    RuntimeEvents.emit("ui:render", {});
  },

  setInfillDensity(value) {
    RuntimeState.infillDensity = clamp(
      Number(value),
      10,
      60
    );
    setWorkspaceContext(
      "slicing",
      "prepare",
      "slicerPanel"
    );

    RuntimeEvents.emit(
      "terminal:message",
      {
        message:
          "Плотность заполнения обновлена до " +
          RuntimeState.infillDensity +
          "%.",
        type: "control"
      }
    );

    RuntimeEvents.emit("ui:render", {});
  },

  applyPreset(presetId) {
    const preset =
      PRESET_LIBRARY.find(
        function findPreset(item) {
          return item.id === presetId;
        }
      );

    if (!preset) {
      return;
    }

    RuntimeState.selectedPresetId =
      preset.id;
    RuntimeState.printSpeed =
      preset.printSpeed;
    RuntimeState.flowRate =
      preset.flowRate;
    RuntimeState.layerHeight =
      preset.layerHeight;
    RuntimeState.infillDensity =
      preset.infillDensity;
    RuntimeState.nozzleTemp =
      preset.nozzleTemp;
    RuntimeState.vibration = clamp(
      RuntimeState.vibration +
      (preset.id === "speed" ? 0.04 : -0.01),
      0.08,
      0.48
    );
    setWorkspaceContext(
      "slicing",
      "prepare",
      "slicerPanel"
    );

    RuntimeEvents.emit(
      "terminal:message",
      {
        message:
          "Применен профиль «" +
          preset.name +
          "».",
        type: "preset"
      }
    );

    AIOrchestrator.queue(
      "preset_applied",
      "Профиль обновлен. Выполняю повторную оценку стабильности."
    );

    RuntimeEvents.emit("ui:render", {});
  },

  selectModel(modelId) {
    const model =
      MODEL_LIBRARY.find(
        function findModel(item) {
          return item.id === modelId;
        }
      );

    if (!model) {
      return;
    }

    RuntimeState.selectedModelId = model.id;
    RuntimeState.modelLoading = true;
    setWorkspaceContext(
      "profiles",
      RuntimeState.currentStage,
      "viewerPanel"
    );

    RuntimeEvents.emit(
      "terminal:message",
      {
        message:
          "Запущена загрузка модели «" +
          model.name +
          "».",
        type: "model"
      }
    );

    RuntimeEvents.emit("ui:render", {});

    window.setTimeout(
      () => {
        RuntimeState.modelLoading = false;
        RuntimeState.focusPanelId =
          "viewerPanel";

        RuntimeEvents.emit(
          "terminal:message",
          {
            message:
              "Модель «" +
              model.name +
              "» синхронизирована с runtime.",
            type: "model"
          }
        );

        AIOrchestrator.queue(
          "model_loaded",
          "Геометрия обработана. Runtime готов к следующему циклу оптимизации."
        );

        RuntimeEvents.emit("ui:render", {});
      },
      900
    );
  },

  submitAIMessage() {
    if (!DOM.aiInput) {
      return;
    }

    const value =
      DOM.aiInput.value.trim();

    if (!value) {
      return;
    }

    setWorkspaceContext(
      "ai",
      "monitor",
      "aiPanel"
    );

    pushAIMessage(value, "user");
    DOM.aiInput.value = "";

    RuntimeEvents.emit(
      "terminal:message",
      {
        message:
          "Запрос передан AI-ассистенту на анализ.",
        type: "ai"
      }
    );

    RuntimeEvents.emit("ui:render", {});
    AIOrchestrator.respond(
      getMockAIReply(value),
      "user_guidance"
    );
  }
};

/* =========================================
   RUNTIME ENGINE
========================================= */

const RuntimeEngine = {
  tickRate: 1200,
  frame: 0,
  loopId: null,
  intervals: {
    ai: 4,
    terminal: 3
  },
  timers: {
    recovery: null,
    defectCorrection: null
  },

  start() {
    if (this.loopId) {
      return;
    }

    this.loopId = window.setInterval(
      () => {
        const frameStart = performance.now();

        this.frame += 1;
        RuntimeState.metrics.runtimeTicks = this.frame;

        this.updateTelemetry();
        this.updateAI();
        this.updateTerminal();
        this.processRuntimeState();
        this.syncUI();

        RuntimeState.metrics.frameTime =
          Math.round(
            (performance.now() - frameStart) * 100
          ) / 100;
      },
      this.tickRate
    );
  },

  updateTelemetry() {
    if (!RuntimeState.isPrinting || RuntimeState.isPaused) {
      return;
    }

    const speedFactor =
      (RuntimeState.printSpeed - 40) / 180;
    const flowFactor =
      (RuntimeState.flowRate - 80) / 60;
    const targetNozzle =
      210 +
      speedFactor * 8 +
      flowFactor * 3 +
      (RuntimeState.aiOptimizationEnabled ? 1.2 : 0);
    const targetBed =
      59 + speedFactor * 3.2;
    const targetVibration =
      0.09 +
      speedFactor * 0.18 +
      (RuntimeState.supportsEnabled ? -0.01 : 0.02);

    RuntimeState.nozzleTemp = clamp(
      RuntimeState.nozzleTemp +
      (targetNozzle - RuntimeState.nozzleTemp) * 0.18 +
      randomBetween(-0.28, 0.36),
      208,
      228
    );

    RuntimeState.bedTemp = clamp(
      RuntimeState.bedTemp +
      (targetBed - RuntimeState.bedTemp) * 0.16 +
      randomBetween(-0.12, 0.18),
      58,
      65
    );

    RuntimeState.vibration = clamp(
      RuntimeState.vibration +
      (targetVibration - RuntimeState.vibration) * 0.24 +
      randomBetween(-0.008, 0.012),
      0.08,
      0.48
    );

    if (
      RuntimeState.printSpeed > 170 &&
      RuntimeState.runtime !== "critical"
    ) {
      RuntimeState.vibration = clamp(
        RuntimeState.vibration + randomBetween(0.006, 0.014),
        0.08,
        0.48
      );
    }

    const activeDefect =
      getActiveDefect();

    if (activeDefect) {
      RuntimeState.vibration = clamp(
        RuntimeState.vibration +
        activeDefect.severity * 0.015,
        0.08,
        0.48
      );
      RuntimeState.nozzleTemp = clamp(
        RuntimeState.nozzleTemp +
        activeDefect.severity * 0.4,
        208,
        228
      );
    }

    const anomalyPenalty =
      (RuntimeState.vibration > 0.3 ? 0.6 : 0) +
      (RuntimeState.nozzleTemp > 220 ? 0.5 : 0);
    const confidenceTarget =
      98.6 -
      anomalyPenalty -
      (RuntimeState.aiOptimizationEnabled ? 0 : 1.1);

    RuntimeState.aiConfidence = clamp(
      RuntimeState.aiConfidence +
      (confidenceTarget - RuntimeState.aiConfidence) * 0.2 +
      randomBetween(-0.14, 0.1),
      91,
      99
    );

    RuntimeState.progress = clamp(
      RuntimeState.progress +
      randomBetween(0.15, 0.45),
      0,
      100
    );

    RuntimeState.currentLayer = Math.min(
      RuntimeState.totalLayers,
      Math.max(
        1,
        Math.round(
          (RuntimeState.progress / 100) *
          RuntimeState.totalLayers
        )
      )
    );

    RuntimeState.timeRemainingMinutes = clamp(
      RuntimeState.timeRemainingMinutes -
      randomBetween(0.7, 1.8),
      0,
      240
    );

    RuntimeState.currentCommand =
      MOCK_GCODE_STREAM[
        RuntimeState.metrics.runtimeTicks %
        MOCK_GCODE_STREAM.length
      ];
  },

  updateAI() {
    if (!RuntimeState.isPrinting || RuntimeState.isPaused) {
      return;
    }

    if (this.frame % this.intervals.ai !== 0) {
      return;
    }

    if (RuntimeState.runtime === "critical") {
      AIOrchestrator.queue(
        "critical",
        "Критический режим активен. Удерживаю безопасный температурный профиль."
      );
      return;
    }

    if (
      RuntimeState.runtime === "warning" &&
      RuntimeState.vibration > 0.32
    ) {
      AIOrchestrator.queue(
        "warning",
        "Обнаружено повышение вибрации. Рекомендуется снижение скорости на 12%."
      );
      return;
    }

    if (Math.random() > 0.58) {
      AIOrchestrator.queue(
        RuntimeState.runtime === "recovering"
          ? "recovery"
          : "stable",
        pickRandom(AI_RESPONSES.user_guidance)
      );
    }
  },

  updateTerminal() {
    if (
      !RuntimeState.isPrinting ||
      RuntimeState.isPaused ||
      this.frame % this.intervals.terminal !== 0
    ) {
      return;
    }

    RuntimeEvents.emit(
      "terminal:message",
      {
        message: pickRandom(
          TERMINAL_MESSAGES[RuntimeState.runtime] ||
          TERMINAL_MESSAGES.stable
        ),
        type: RuntimeState.runtime
      }
    );
  },

  processRuntimeState() {
    if (
      RuntimeState.isPrinting &&
      RuntimeState.progress >= 100
    ) {
      RuntimeState.isPrinting = false;
      RuntimeState.isPaused = false;
      RuntimeState.jobLifecycle = "completed";
      setWorkspaceContext(
        "monitoring",
        "monitor",
        "viewerPanel"
      );
      RuntimeState.activeDefectId = "none";
      RuntimeState.defectSeverity = 0;
      RuntimeState.safetyGate.status = "ЗАВЕРШЕНО";
      RuntimeState.safetyGate.detail =
        "Демонстрационный цикл завершен без потери телеметрии.";

      RuntimeEvents.emit(
        "terminal:message",
        {
          message:
            "Задание завершено. Протокол телеметрии закрыт штатно.",
          type: "job"
        }
      );

      AudioManager.play("printComplete");
      AudioManager.syncPrintLoop();
      return;
    }

    if (!RuntimeState.isPrinting || RuntimeState.isPaused) {
      return;
    }

    if (RuntimeState.locks.critical) {
      return;
    }

    if (RuntimeState.nozzleTemp > 225) {
      RuntimeState.locks.critical = true;

      RuntimeEvents.emit(
        "runtime:state",
        {
          state: "critical",
          payload: {
            source: "temperature"
          }
        }
      );

      RuntimeEvents.emit(
        "runtime:critical",
        {
          message:
            "Температура сопла превысила безопасный порог. Активирована термозащита."
        }
      );

      window.clearTimeout(this.timers.recovery);

      this.timers.recovery = window.setTimeout(
        () => {
          RuntimeState.nozzleTemp = 219;
          RuntimeState.vibration = clamp(
            RuntimeState.vibration - 0.05,
            0.08,
            0.48
          );
          RuntimeState.locks.recovery = true;

          RuntimeEvents.emit(
            "runtime:state",
            {
              state: "recovering",
              payload: {
                source: "critical-recovery"
              }
            }
          );

          window.setTimeout(
            () => {
              RuntimeState.locks.critical = false;
              RuntimeState.locks.recovery = false;

              RuntimeEvents.emit(
                "runtime:state",
                {
                  state: "stable",
                  payload: {
                    source: "recovered"
                  }
                }
              );
            },
            4000
          );
        },
        5000
      );

      return;
    }

    if (RuntimeState.locks.recovery) {
      return;
    }

    if (
      RuntimeState.vibration > 0.34 &&
      RuntimeState.runtime !== "warning"
    ) {
      RuntimeEvents.emit(
        "runtime:state",
        {
          state: "warning",
          payload: {
            source: "vibration"
          }
        }
      );
      return;
    }

    if (
      RuntimeState.runtime === "warning" &&
      RuntimeState.vibration < 0.24
    ) {
      RuntimeState.locks.recovery = true;

      RuntimeEvents.emit(
        "runtime:state",
        {
          state: "recovering",
          payload: {
            source: "warning-recovery"
          }
        }
      );

      window.clearTimeout(this.timers.recovery);

      this.timers.recovery = window.setTimeout(
        () => {
          RuntimeState.locks.recovery = false;

          RuntimeEvents.emit(
            "runtime:state",
            {
              state: "stable",
              payload: {
                source: "recovery-complete"
              }
            }
          );
        },
        3500
      );

      return;
    }

    if (
      RuntimeState.runtime === "recovering" &&
      RuntimeState.vibration < 0.22 &&
      RuntimeState.nozzleTemp < 221
    ) {
      RuntimeEvents.emit(
        "runtime:state",
        {
          state: "stable",
          payload: {
            source: "settled"
          }
        }
      );
    }
  },

  syncUI() {
    RuntimeEvents.emit("ui:render", {});
  }
};

/* =========================================
   RUNTIME EVENT LISTENERS
========================================= */

function initializeRuntimeEvents() {
  RuntimeEvents.on(
    "terminal:message",
    function onTerminalMessage(payload) {
      pushTerminalEntry(
        payload.message || "Нет данных.",
        payload.type || "info"
      );
      AudioManager.handleTerminalEvent(payload);
    }
  );

  RuntimeEvents.on(
    "runtime:state",
    function onRuntimeState(payload) {
      const previousState = RuntimeState.runtime;
      const nextState = payload.state || "stable";

      if (previousState === nextState) {
        return;
      }

      setRuntimeState(nextState);
      AudioManager.handleRuntimeState(nextState);

      RuntimeEvents.emit(
        "ui:runtime-state",
        {
          state: nextState,
          payload: payload.payload || {}
        }
      );

      RuntimeEvents.emit(
        "terminal:message",
        {
          message:
            "Runtime переключен в режим: " +
            STATE_LABELS[nextState].runtimeStateText.toLowerCase() +
            ".",
          type: nextState
        }
      );

      if (nextState === "warning") {
        pushAlert(
          "WARNING",
          "Рост вибрации превышает рабочий коридор."
        );
        AIOrchestrator.queue(
          "warning",
          "Обнаружено повышение вибрации. Рекомендуется снижение скорости на 12%."
        );
      }

      if (nextState === "critical") {
        pushAlert(
          "CRITICAL",
          "Термозащита активирована для сопла."
        );
        AIOrchestrator.queue(
          "critical",
          "Активирована экстренная стабилизация температуры."
        );
      }

      if (nextState === "recovering") {
        pushAlert(
          "INFO",
          "Система выполняет восстановление после отклонения."
        );
        AIOrchestrator.queue(
          "recovery",
          "Стабильность восстановлена. Продолжаю мониторинг."
        );
      }

      if (nextState === "stable") {
        pushAlert(
          "INFO",
          "Runtime вернулся в штатный режим."
        );
      }
    }
  );

  RuntimeEvents.on(
    "runtime:critical",
    function onRuntimeCritical(payload) {
      pushAlert(
        "CRITICAL",
        payload.message || "Критическое событие runtime."
      );

      RuntimeEvents.emit(
        "terminal:message",
        {
          message:
            payload.message || "Критическое событие runtime.",
          type: "critical"
        }
      );
    }
  );

  RuntimeEvents.on(
    "ai:response",
    function onAIResponse(payload) {
      pushAIMessage(
        payload.message || "Нет ответа.",
        payload.role || "assistant"
      );
      RuntimeEvents.emit("ui:render", {});
    }
  );

  RuntimeEvents.on(
    "ui:runtime-state",
    function onUIRuntimeState() {
      RuntimeEvents.emit("ui:render", {});
    }
  );

  RuntimeEvents.on(
    "ui:render",
    function onUIRender() {
      UIRender.render();
    }
  );
}

/* =========================================
   INPUT SYSTEMS
========================================= */

function initializeControls() {
  if (DOM.audioToggleButton) {
    DOM.audioToggleButton.addEventListener(
      "click",
      function onAudioToggleClick() {
        if (!AudioManager.muted) {
          AudioManager.play("clickSoft");
        }

        AudioManager.toggleMute();
      }
    );
  }

  if (DOM.audioVolumeControl) {
    DOM.audioVolumeControl.addEventListener(
      "input",
      function onAudioVolumeInput(event) {
        AudioManager.setVolume(
          Number(event.target.value) / 100
        );

        if (!AudioManager.muted) {
          AudioManager.play("settingChange");
        }
      }
    );
  }

  if (DOM.nav) {
    DOM.nav.addEventListener(
      "click",
      function onNavigationClick(event) {
        const button =
          event.target.closest("[data-nav]");

        if (!button) {
          return;
        }

        RuntimeActions.selectNavigation(
          button.dataset.nav
        );

        const focusTarget =
          document.getElementById(
            button.dataset.focus || ""
          );

        if (focusTarget) {
          focusTarget.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest"
          });
        }
      }
    );
  }

  if (DOM.stageRail) {
    DOM.stageRail.addEventListener(
      "click",
      function onStageClick(event) {
        const button =
          event.target.closest("[data-stage]");

        if (!button) {
          return;
        }

        RuntimeActions.selectStage(
          button.dataset.stage
        );
      }
    );
  }

  if (DOM.viewerMonitorMode) {
    DOM.viewerMonitorMode.addEventListener(
      "click",
      function onMonitorViewClick(event) {
        const button =
          event.target.closest("[data-monitor-view]");

        if (!button) {
          return;
        }

        RuntimeActions.setMonitorViewMode(
          button.dataset.monitorView
        );
      }
    );
  }

  if (DOM.speedControl) {
    DOM.speedControl.addEventListener(
      "input",
      function onSpeedInput(event) {
        RuntimeActions.setPrintSpeed(
          event.target.value
        );
      }
    );
  }

  if (DOM.flowControl) {
    DOM.flowControl.addEventListener(
      "input",
      function onFlowInput(event) {
        RuntimeActions.setFlowRate(
          event.target.value
        );
      }
    );
  }

  if (DOM.layerHeightControl) {
    DOM.layerHeightControl.addEventListener(
      "input",
      function onLayerInput(event) {
        RuntimeActions.setLayerHeight(
          event.target.value
        );
      }
    );
  }

  if (DOM.infillControl) {
    DOM.infillControl.addEventListener(
      "input",
      function onInfillInput(event) {
        RuntimeActions.setInfillDensity(
          event.target.value
        );
      }
    );
  }

  if (DOM.nozzleControl) {
    DOM.nozzleControl.addEventListener(
      "input",
      function onNozzleInput(event) {
        RuntimeActions.setNozzleTemperature(
          event.target.value
        );
      }
    );
  }

  if (DOM.supportToggle) {
    DOM.supportToggle.addEventListener(
      "change",
      function onSupportToggle(event) {
        RuntimeActions.setSupports(
          event.target.checked
        );
      }
    );
  }

  if (DOM.aiOptimizationToggle) {
    DOM.aiOptimizationToggle.addEventListener(
      "change",
      function onAIToggle(event) {
        RuntimeActions.setAIOptimization(
          event.target.checked
        );
      }
    );
  }

  if (DOM.modelList) {
    DOM.modelList.addEventListener(
      "click",
      function onModelClick(event) {
        const card =
          event.target.closest(".model-card");

        if (!card) {
          return;
        }

        RuntimeActions.selectModel(
          card.dataset.model
        );
      }
    );
  }

  if (DOM.presetGrid) {
    DOM.presetGrid.addEventListener(
      "click",
      function onPresetClick(event) {
        const card =
          event.target.closest(".preset-card");

        if (!card) {
          return;
        }

        RuntimeActions.applyPreset(
          card.dataset.preset
        );
      }
    );
  }

  if (DOM.startPrintButton) {
    DOM.startPrintButton.addEventListener(
      "click",
      function onStartClick() {
        RuntimeActions.startPrint();
      }
    );
  }

  if (DOM.pausePrintButton) {
    DOM.pausePrintButton.addEventListener(
      "click",
      function onPauseClick() {
        RuntimeActions.togglePause();
      }
    );
  }

  if (DOM.stopPrintButton) {
    DOM.stopPrintButton.addEventListener(
      "click",
      function onStopClick() {
        RuntimeActions.stopPrint();
      }
    );
  }

  if (DOM.defectButtons) {
    DOM.defectButtons.addEventListener(
      "click",
      function onDefectClick(event) {
        const button =
          event.target.closest("[data-defect]");

        if (!button) {
          return;
        }

        RuntimeActions.triggerDefect(
          button.dataset.defect
        );
      }
    );
  }
}

function initializeAIChat() {
  if (DOM.aiSendButton) {
    DOM.aiSendButton.addEventListener(
      "click",
      function onSendButton() {
        RuntimeActions.submitAIMessage();
      }
    );
  }

  if (DOM.aiInput) {
    DOM.aiInput.addEventListener(
      "keydown",
      function onInputKeydown(event) {
        if (event.key === "Enter") {
          RuntimeActions.submitAIMessage();
        }
      }
    );
  }
}

function initializeViewerControls() {
  if (!DOM.viewerCore) {
    return;
  }

  syncViewerFullscreenButton();

  DOM.viewerCore.addEventListener(
    "pointerdown",
    function onViewerPointerDown(event) {
      ViewerPointerState.active = true;
      ViewerPointerState.x = event.clientX;
      ViewerPointerState.y = event.clientY;
      DOM.viewerCore.classList.add("is-dragging");

      if (DOM.viewerCore.setPointerCapture) {
        DOM.viewerCore.setPointerCapture(event.pointerId);
      }
    }
  );

  window.addEventListener(
    "pointermove",
    function onViewerPointerMove(event) {
      if (!ViewerPointerState.active) {
        return;
      }

      const deltaX =
        event.clientX - ViewerPointerState.x;
      const deltaY =
        event.clientY - ViewerPointerState.y;

      ViewerPointerState.x = event.clientX;
      ViewerPointerState.y = event.clientY;

      RuntimeActions.setViewerCamera(
        deltaX,
        deltaY
      );
    }
  );

  window.addEventListener(
    "pointerup",
    function onViewerPointerUp() {
      if (!ViewerPointerState.active) {
        return;
      }

      ViewerPointerState.active = false;

      if (DOM.viewerCore) {
        DOM.viewerCore.classList.remove(
          "is-dragging"
        );
      }

      RuntimeEvents.emit("ui:render", {});
    }
  );

  DOM.viewerCore.addEventListener(
    "wheel",
    function onViewerWheel(event) {
      event.preventDefault();
      RuntimeActions.setViewerZoom(
        event.deltaY > 0 ? -0.04 : 0.04
      );
    },
    {
      passive: false
    }
  );

  DOM.viewerCore.addEventListener(
    "dblclick",
    function onViewerDoubleClick() {
      RuntimeActions.resetViewerCamera();
    }
  );

  window.addEventListener(
    "resize",
    function onViewerResize() {
      RuntimeEvents.emit("ui:render", {});
    }
  );

  if (DOM.viewerFullscreenButton) {
    DOM.viewerFullscreenButton.addEventListener(
      "click",
      function onViewerFullscreenClick() {
        toggleViewerFullscreen();
      }
    );
  }

  document.addEventListener(
    "fullscreenchange",
    function onViewerFullscreenChange() {
      syncViewerFullscreenButton();
      scheduleViewportModeUpdate();
      RuntimeEvents.emit("ui:render", {});
    }
  );

  document.addEventListener(
    "visibilitychange",
    function onVisibilityChange() {
      PrintSoundEngine.updateFromPrintState(
        RuntimeState
      );
    }
  );
}

/* =========================================
   STARTUP SEQUENCE
========================================= */

function startupSequence() {
  RuntimeEvents.emit(
    "terminal:message",
    {
      message: "Boot sequence initialized",
      type: "boot"
    }
  );

  window.setTimeout(
    function telemetryOnline() {
      RuntimeEvents.emit(
        "terminal:message",
        {
          message: "Telemetry core online",
          type: "boot"
        }
      );
    },
    280
  );

  window.setTimeout(
    function aiOnline() {
      RuntimeEvents.emit(
        "terminal:message",
        {
          message: "AI analysis layer synchronized",
          type: "boot"
        }
      );
    },
    560
  );

  window.setTimeout(
    function runtimeStable() {
      RuntimeEvents.emit(
        "terminal:message",
        {
          message: "Runtime stable",
          type: "boot"
        }
      );

      RuntimeEvents.emit(
        "ai:response",
        {
          message:
            "Система инициализирована. Готов к анализу профиля и телеметрии.",
          role: "assistant",
          payload: {
            category: "stable"
          }
        }
      );
    },
    860
  );
}

/* =========================================
   INITIALIZATION
========================================= */

function initializeRuntime() {
  syncRuntimeLabels();
  pushAlert(
    "INFO",
    "Runtime готов к запуску демонстрационного цикла."
  );
  pushAIMessage(
    "Готов к анализу геометрии, телеметрии и безопасных корректировок печати.",
    "assistant"
  );

  initializeRuntimeEvents();
  initializeViewportShell();
  initializeControls();
  initializeViewerControls();
  initializeAIChat();
  startupSequence();
  updateDOM();
  RuntimeEngine.start();

  console.log(
    "NEXTGEN SLICER RUNTIME ACTIVE"
  );
}

async function bootApplication() {
  if (BootManager.started) {
    return;
  }

  BootManager.started = true;
  BootManager.show();
  AudioManager.init();

  BootManager.setStep(
    "Инициализация интерфейса",
    0.12,
    "Подготовка DOM и runtime-модулей"
  );
  await BootManager.nextFrame();
  await BootManager.wait(90);

  BootManager.setStep(
    "Загрузка ассетов",
    0.34,
    "Иконки, UI-ресурсы и системные элементы"
  );
  await AssetManager.preloadCore();
  await BootManager.wait(90);

  BootManager.setStep(
    "Подготовка 3D-сцены",
    0.58,
    "Прогрев geometry cache и canvas viewer"
  );
  getViewerGeometry();
  await BootManager.nextFrame();
  await BootManager.wait(90);

  BootManager.setStep(
    "Подключение модулей мониторинга",
    0.78,
    "События, телеметрия и звуковой контур"
  );
  initializeRuntime();
  await BootManager.wait(120);

  BootManager.setStep(
    "Активация агентов",
    0.94,
    "Синхронизация AI-контура и интерфейса"
  );
  await BootManager.wait(120);
  await BootManager.complete();
}

bootApplication();
