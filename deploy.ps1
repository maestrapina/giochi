Write-Host ""
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "   PUBBLICAZIONE GIOCHI BAMBINI" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Lavora sempre dalla cartella in cui si trova questo script
Set-Location $PSScriptRoot

Write-Host "1. Controllo modifiche Git..." -ForegroundColor Yellow
git status

Write-Host ""
$messaggio = Read-Host "Scrivi il messaggio del commit"

if ([string]::IsNullOrWhiteSpace($messaggio)) {
    $messaggio = "Aggiornamento giochi"
}

Write-Host ""
Write-Host "2. Aggiungo i file..." -ForegroundColor Yellow
git add .

Write-Host ""
Write-Host "3. Creo il commit..." -ForegroundColor Yellow

git diff --cached --quiet

if ($LASTEXITCODE -eq 0) {
    Write-Host "Nessuna modifica da committare." -ForegroundColor DarkYellow
}
else {
    git commit -m "$messaggio"

    if ($LASTEXITCODE -ne 0) {
        Write-Host ""
        Write-Host "ERRORE durante il commit." -ForegroundColor Red
        Read-Host "Premi INVIO per uscire"
        exit 1
    }
}

Write-Host ""
Write-Host "4. Invio il codice su GitHub..." -ForegroundColor Yellow
git push origin master

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "ERRORE durante il push." -ForegroundColor Red
    Read-Host "Premi INVIO per uscire"
    exit 1
}

Write-Host ""
Write-Host "5. Compilo e pubblico il sito..." -ForegroundColor Yellow
npm run deploy

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "ERRORE durante il deploy." -ForegroundColor Red
    Write-Host "Il sito NON e' stato aggiornato." -ForegroundColor Red
    Read-Host "Premi INVIO per uscire"
    exit 1
}

Write-Host ""
Write-Host "=====================================" -ForegroundColor Green
Write-Host "       PUBBLICAZIONE COMPLETATA!" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green
Write-Host ""
Write-Host "Sito:"
Write-Host "https://maestrapina.github.io/giochi/" -ForegroundColor Cyan
Write-Host ""
Write-Host "Potrebbero servire alcuni minuti prima di vedere le modifiche."
Write-Host ""

Read-Host "Premi INVIO per chiudere"
