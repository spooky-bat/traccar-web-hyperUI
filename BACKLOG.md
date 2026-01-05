# Dziennik zmian - Backlog

W tym pliku będą zapisywane wszystkie zmiany wprowadzone w aplikacji oraz pomysły na przyszłość.

## Wprowadzone zmiany

-   **2026-01-05**: Dodano możliwość zmiany koloru tła panelu bocznego na mapie.
    -   Dodano nowy atrybut serwera: `mapColorSidePanel`.
    -   Zaktualizowano pliki tłumaczeń (`en.json`, `pl.json`).
    -   Zmodyfikowano komponent `MainPage.jsx`, aby używał nowego atrybutu.
    -   Utworzono pliki `BACKLOG.md` i `MANUAL.md` do śledzenia zmian i dokumentacji.
-   **2026-01-05**: Zmiany w panelu bocznym i walidacja atrybutów.
    -   Rozszerzono zmianę koloru tła na nagłówek panelu bocznego.
    -   Dodano walidację formatu koloru (HEX) dla atrybutu `mapColorSidePanel`.
    -   Dodano placeholder dla pola koloru.
    -   Zablokowano możliwość zapisania ustawień serwera przy niepoprawnym formacie koloru.
-   **2026-01-05**: Dodano możliwość zmiany koloru tła karty statusu urządzenia.
    -   Zidentyfikowano komponent `StatusCard` jako odpowiedzialny za wyświetlanie okna statusu.
    -   Dodano nowy atrybut serwera: `mapColorStatusCard` z odpowiednimi tłumaczeniami.
    -   Zmodyfikowano komponent `StatusCard.jsx`, aby używał nowego atrybutu do zmiany koloru tła.
    -   Walidacja formatu koloru (HEX) działa również dla tego atrybutu.

## Pomysły na przyszłość

-   ...