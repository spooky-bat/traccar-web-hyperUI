# Dziennik zmian - Backlog

W tym pliku będą zapisywane wszystkie zmiany wprowadzone w aplikacji oraz pomysły na przyszłość.

## Wprowadzone zmiany

-   **2026-01-08, 15:45**: Utworzono plik `MANUAL.md` i dodano dokumentację dla funkcji personalizacji kolorów.
-   **2026-01-08, 15:30**: Dodano możliwość zmiany koloru ikon typów urządzeń.
    -   Dodano nowy atrybut serwera: `deviceIconColor` z odpowiednimi tłumaczeniami.
    -   Zmieniono sposób wyświetlania ikon w komponencie `DeviceRow.jsx`, aby umożliwić zmianę koloru.
    -   Walidacja formatu koloru (HEX) działa również dla tego atrybutu.
-   **2026-01-08, 15:00**: Dodano możliwość zmiany koloru tła górnego paska narzędzi.
    -   Dodano nowy atrybut serwera: `mapColorToolbar` z odpowiednimi tłumaczeniami.
    -   Zmodyfikowano komponent `MainPage.jsx`, aby używał nowego atrybutu do zmiany koloru tła.
    -   Walidacja formatu koloru (HEX) działa również dla tego atrybutu.
-   **2026-01-05, 14:00**: Wprowadzono funkcjonalność wyboru koloru (color picker) dla pól atrybutów koloru.
    -   W komponentach umożliwiających edycję atrybutów koloru (np. `EditAttributesAccordion.jsx`) dodano przycisk otwierający selektor kolorów.
    -   Selektor kolorów pozwala na wizualny wybór koloru, jednocześnie zachowując możliwość ręcznego wpisania kodu HEX.
    -   Do wyskakującego okienka wyboru koloru (Popover) dodano pole tekstowe do wyświetlania i edycji wartości heksadecymalnej koloru.
-   **2026-01-05, 12:00**: Dodano możliwość zmiany koloru tła karty statusu urządzenia.
    -   Zidentyfikowano komponent `StatusCard` jako odpowiedzialny za wyświetlanie okna statusu.
    -   Dodano nowy atrybut serwera: `mapColorStatusCard` z odpowiednimi tłumaczeniami.
    -   Zmodyfikowano komponent `StatusCard.jsx`, aby używał nowego atrybutu do zmiany koloru tła.
    -   Walidacja formatu koloru (HEX) działa również dla tego atrybutu.
-   **2026-01-05, 10:30**: Zmiany w panelu bocznym i walidacja atrybutów.
    -   Rozszerzono zmianę koloru tła na nagłówek panelu bocznego.
    -   Dodano walidację formatu koloru (HEX) dla atrybutu `mapColorSidePanel`.
    -   Dodano placeholder dla pola koloru.
    -   Zablokowano możliwość zapisania ustawień serwera przy niepoprawnym formacie koloru.
-   **2026-01-05, 09:00**: Dodano możliwość zmiany koloru tła panelu bocznego na mapie.
    -   Dodano nowy atrybut serwera: `mapColorSidePanel`.
    -   Zaktualizowano pliki tłumaczeń (`en.json`, `pl.json`).
    -   Zmodyfikowano komponent `MainPage.jsx`, aby używał nowego atrybutu.
    -   Utworzono pliki `BACKLOG.md` i `MANUAL.md` do śledzenia zmian i dokumentacji.

## Pomysły na przyszłość

-   W pliku MANUAL.md przywrócenie bardziej obszernych opisów wprowadzonych zmian, szczególnie dodanie polskich i angielskich nazw artybutów. 
-   Dodanie atrybutu w opcjach serwera który pozwala na zmianę i dodanie favicony. Podobnie jak to ma miejsce z plikami graficznymi do logo.

## Zadania do realizacji

-   **Panel personalizacji UI (TODO)**: Stworzenie dedykowanej zakładki/strony w Settings zbierającej WSZYSTkie preferencje w jednym miejscu. Obecnie User Preferences i Server Preferences są rozdzielone. Wymaga nowego komponentu łączącego pola z `PreferencesPage.jsx` + `ServerPage.jsx`. Zadanie odroczone (2026-01-16) - priorytet niski, wymaga interwencji w kodzie.