@echo off
REM === Joshua Lee Portfolio - local build script ===
REM Compiles .jsx -> .js with esbuild, then patches index.html to load
REM the .js files directly (no Babel runtime), then prerenders per-route
REM HTML files for SEO. Run once before each push.

where node >nul 2>&1
if errorlevel 1 (
  echo.
  echo ERROR: Node.js is not installed.
  echo.
  echo 1. Download Node.js LTS from https://nodejs.org/
  echo 2. Install it ^(default options are fine^).
  echo 3. Close this window, then double-click build.bat again.
  echo.
  pause
  exit /b 1
)

echo.
echo ============================================================
echo  Joshua Lee Portfolio - production build
echo ============================================================
echo.
echo Step 1/3: Compiling JSX -^> JS with esbuild...
echo.

call npx --yes esbuild ^
  app.jsx components.jsx Home.jsx About.jsx CaseStudy.jsx BrickCase.jsx OtherCases.jsx CanvasCase.jsx Playground.jsx ^
  --loader:.jsx=jsx ^
  --jsx-factory=React.createElement ^
  --jsx-fragment=React.Fragment ^
  --target=es2020 ^
  --outdir=. ^
  --log-level=info
if errorlevel 1 goto fail

echo.
echo Step 2/3: Patching index.html (removing Babel, pointing to .js)...
echo.

node build.js
if errorlevel 1 goto fail

echo.
echo Step 3/3: Generating prerendered pages for SEO...
echo.

node prerender.js
if errorlevel 1 goto fail

echo.
echo ============================================================
echo  Build complete.
echo ============================================================
echo.
echo Next: open GitHub Desktop, commit all changed files
echo       (the new .js files + index.html + per-route folders), then push origin.
echo.
pause
exit /b 0

:fail
echo.
echo ============================================================
echo  BUILD FAILED - scroll up to see the error.
echo ============================================================
echo.
pause
exit /b 1
