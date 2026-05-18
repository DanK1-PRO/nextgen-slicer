# NextGen Slicer Demo

Frontend-only investor demo for `NextGen Slicer`.

This project is a runtime-driven mock of an industrial 3D-printing control surface. It does not perform real slicing, does not connect to a printer, and does not run ML inference. Its purpose is to demonstrate product behavior, operator flows, AI-guided correction, and safety-gate logic in a browser with no backend.

## Launch

Open:

- `C:\Users\grigo\Desktop\nextgen\index.html`

No build step is required.

## What The Demo Actually Shows

- staged workflow inspired by Cura: `Подготовка -> Предпросмотр -> Мониторинг`
- model selection with instant loading feedback
- intent-style presets for quality / balanced / speed modes
- slicer parameter controls for layer height, infill, nozzle temperature, supports, AI optimization
- correlated telemetry for nozzle temperature, bed temperature, speed, vibration, flow, and AI confidence
- defect injection scenarios with visible system-wide reaction
- lock-guarded runtime state machine:
  - `stable`
  - `warning`
  - `critical`
  - `recovering`
- AI assistant responses tied to current runtime state
- Safety Layer card with bounded correction summary
- evidence card, alerts feed, terminal feed, and mock G-code command stream
- operator controls for `Старт`, `Пауза/Продолжить`, and `Стоп`

## What Is Mocked

- no real Cura engine
- no real G-code patching
- no Unity digital twin
- no real Anycubic Mega X telemetry stream
- no WebSocket, Socket.IO, Protobuf, or sensor ingestion
- no real defect detection model
- no real camera feed

The demo is intentionally an illusion layer over a deterministic runtime core.

## Architecture

The runtime follows a single-file contract in `js/app.js`:

`DOM -> RuntimeState -> RuntimeEvents -> RuntimeActions -> UIRender -> RuntimeEngine -> UI Sync -> DOM`

Rules enforced in the current build:

- `RuntimeState` is the source of truth
- `RuntimeActions` mutate state and emit events
- `RuntimeEngine` owns ticking, telemetry drift, and state transitions
- `UIRender` performs diff-based DOM updates
- state transitions use `locks.recovery` and `locks.critical`
- one guarded `setInterval` drives the runtime loop

## Source Cues Used In The Demo

The current demo direction was aligned against project materials and the supplied Cura archive.

From project materials:

- Unity-based simulation and digital-twin story
- Anycubic Mega X as the anchor machine
- defect generation and correction narrative
- Safety Layer / correction-gate concept
- telemetry + operator dashboard + AI recommendation flow

From `Cura-main.zip`:

- stage model: Prepare / Preview / Monitor
- intent-based preset framing
- grouped slicer settings and profile behavior
- monitor-style progress + status + ETA patterns
- explicit print information and feature-time thinking
- Anycubic Mega X definition cues:
  - build volume `300 x 300 x 305`
  - travel speed around `100 mm/s`
  - max travel feedrate `120 mm/s`
  - acceleration constraints for a believable machine envelope

## Recommended Demo Flow

1. Open `index.html`
2. Select a model
3. Apply preset `Производительность`
4. Press `Старт`
5. Raise print speed above `170 мм/с`
6. Inject a defect
7. Observe:
   - vibration growth
   - state transition
   - AI recommendation
   - Safety Layer correction
   - recovery back to stable mode
8. Use `Стоп` to reset the runtime loop

## Important Scope Note

This repository contains legacy folders and experimental assets that are not part of the final browser demo path. The active experience is driven by:

- `C:\Users\grigo\Desktop\nextgen\index.html`
- `C:\Users\grigo\Desktop\nextgen\js\app.js`
- `C:\Users\grigo\Desktop\nextgen\css\app.css`
- `C:\Users\grigo\Desktop\nextgen\css\layout.css`
- `C:\Users\grigo\Desktop\nextgen\css\components.css`
- `C:\Users\grigo\Desktop\nextgen\css\experience.css`
