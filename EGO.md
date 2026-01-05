# Wytyczne Agenta: Projekt "Traccar HyperUI"

## 1. Styl Komunikacji
- **Ton:** Utrzymuj luźny, ale profesjonalny i techniczny ton.
- **Interaktywność:** Odpowiadaj na pytania dotyczące Twoich działań, procesu kodowania, używanych technologii i Twoich możliwości.
- **Opinie i Oceny:** Kiedy zostaniesz o to poproszony, wyrażaj swoją opinię na temat zasadności, łatwości wprowadzenia zmian lub oceny istniejących rozwiązań.

## 2. Kontekst Współpracy
- **Partner:** Użytkownik nie jest programistą, ale potrafi czytać i rozumieć kod. Komunikuje się za pomocą precyzyjnych poleceń. Bądź wyrozumiały i gotowy na wyjaśnienia.
- **Cel:** Nasza współpraca ma na celu skuteczne i bezpieczne modyfikowanie oraz rozwijanie aplikacji.

## 3. Kontekst Projektu
- **Ostrożność:** Modyfikowany kod ma ponad 10 lat. Podchodź do wszelkich zmian z najwyższą ostrożnością, analizując potencjalny wpływ na istniejącą funkcjonalność.
- **Bezpieczeństwo:** Priorytetem jest unikanie wprowadzania błędów regresji i zachowanie stabilności aplikacji.

## 4. Wytyczne dotyczące dokumentacji (BACKLOG.md i MANUAL.md)

### A. BACKLOG.md
-   **Cel:** Chronologiczny rejestr wszystkich zmian (funkcje, poprawki błędów, refaktoryzacje, ważne decyzje projektowe). Służy jako historia projektu oraz plan na przyszłe zadania.
-   **Format:** Plik Markdown.
-   **Struktura wpisu:**
    -   **Dokładna data i czas:** `RRRR-MM-DD, HH:MM` (zawsze używaj aktualnego czasu 24h w momencie wprowadzania wpisu).
    -   **Zwięzły tytuł:** Krótki, ogólny opis zmiany.
    -   **Szczegółowa lista modyfikacji (lista punktowana):**
        -   **Powód zmiany:** Dlaczego zmiana została wprowadzona (np. "Wdrożenie nowej funkcji", "Naprawa błędu w X", "Refaktoryzacja komponentu Y").
        -   **Zmodyfikowane pliki/komponenty:** Wymień konkretne pliki (`filename.js`, `ComponentName.jsx`) lub komponenty, które zostały zmienione.
        -   **Kluczowe elementy:** Wymień nazwy konkretnych elementów UI, funkcji, zmiennych, klas, atrybutów, które zostały dodane, zmodyfikowane lub usunięte (np. "Dodano `ColorLensIcon`", "Zmodyfikowano `endAdornment` w `OutlinedInput`", "Wprowadzono komponent `Popover`", "Dodano atrybut `mapColorSidePanel`").
        -   **Nowe zależności:** Jeśli dodano nowe biblioteki lub pakiety, wspomnij o tym.
        -   **Decyzje architektoniczne:** Krótko opisz istotne decyzje, jeśli takie miały miejsce.
        -   **Wpływ:** Krótki opis wpływu zmiany na zachowanie aplikacji.

### B. MANUAL.md
-   **Cel:** Dokumentacja użytkowa i konfiguracyjna nowych funkcji lub zmienionych aspektów systemu. Ma wyjaśniać "co" zostało zmienione i "jak" tego używać/konfigurować.
-   **Format:** Plik Markdown.
-   **Struktura wpisu:**
    -   **Jasne nagłówki:** Dla każdej funkcji/konfiguracji używaj opisowych nagłówków.
    -   **Opis:** Zwięzły opis funkcjonalności.
    -   **Instrukcje krok po kroku:** Precyzyjne, łatwe do wykonania kroki, np. "1. Zaloguj się. 2. Przejdź do... 3. Wpisz...".
    -   **Wymagania wstępne/ważne uwagi:** Wszelkie istotne informacje, które użytkownik powinien wiedzieć przed/podczas korzystania z funkcji.
    -   **Przykłady/Wizualizacje:** (Jeśli możliwe) Opisuj, jak dane zmiany wyglądają lub jak wpływają na interfejs użytkownika.

## 5. Wytyczne dotyczące wersjonowania (dla Forków Projektów)

Gdy pracujemy na forku istniejącego kodu źródłowego, który ma już swój numer wersji, ważne jest, aby jasno odróżnić nasze zmiany od zmian w projekcie oryginalnym (upstream).

**Rekomendowana strategia: Semantic Versioning (SemVer) z metadanami kompilacji (`+`)**

Ta strategia jest najbardziej przejrzysta i zgodna ze standardami SemVer dla Twojego przypadku.

1.  **Dopasowanie do wersji upstream (MAJOR.MINOR.PATCH):**
    *   Nasza wersja powinna zawsze odzwierciedlać `MAJOR.MINOR.PATCH` wersji upstream, na której bazujemy. To wyraźnie wskazuje, z której dokładnie wersji oryginalnego projektu pochodzi nasz fork.
    *   _Przykład:_ Jeśli oryginalny projekt `Traccar` ma wersję `6.15.233`, nasza bazowa wersja również będzie `6.15.233`.

2.  **Dodanie identyfikatora forka (Build Metadata):**
    *   Aby odróżnić nasze zmiany, dodajemy identyfikator po znaku `+` (zgodnie ze specyfikacją SemVer). Metadane kompilacji nie wpływają na "ważność" wersji, ale dostarczają dodatkowych informacji.
    *   _Format:_ `MAJOR.MINOR.PATCH+identyfikator_forka.numer_kompilacji`
    *   _Przykład:_ `6.15.233+hyperui.1`

    *   **Zasady inkrementacji:**
        *   **Nasze zmiany (lekkie funkcje UI, poprawki):** Każda nasza zmiana (funkcja lub poprawka) wprowadzona na tej samej wersji bazowej upstream zwiększa `numer_kompilacji`.
            *   _Przykład:_ Z `6.15.233+hyperui.1` na `6.15.233+hyperui.2` po wprowadzeniu kolejnej lekkiej funkcji UI.
        *   **Integracja zmian z upstream:** Gdy zintegrujemy nową wersję z oryginalnego projektu (np. `6.16.0`), nasza wersja bazowa zmienia się (`MAJOR.MINOR.PATCH`), a `numer_kompilacji` resetuje się do `1` (lub `0`, jeśli wolisz, ale `1` jest bardziej intuicyjne jako "pierwsza kompilacja forka na tej nowej bazie").
            *   _Przykład:_ Po połączeniu `6.16.0` z upstream, nasza wersja staje się `6.16.0+hyperui.1` (nasze pierwsze zmiany na bazie `6.16.0`).

**Zalety tej strategii:**
*   **Jasność:** Dokładnie wiadomo, na jakiej wersji upstream bazuje nasz fork.
*   **Łatwość śledzenia:** Łatwo odróżnimy nasze wydania od wydań oryginalnego projektu.
*   **Zgodność z SemVer:** Jest to zgodne ze standardem wersjonowania semantycznego.
*   **Minimalizacja konfliktów:** Unikamy kolizji z numerami PATCH oryginalnego projektu.

**Kiedy zmieniać wersję (`+identyfikator_forka.numer_kompilacji`):**
*   **Numer kompilacji:** Zwiększaj `numer_kompilacji` po każdej udanej integracji naszych zmian (funkcji UI, poprawek) z gałęzią `main` (lub gałęzią, z której tworzymy wydania naszego forka) i gdy chcemy stworzyć nowe "wydanie" naszego forka.

## 6. Kontekst Projektu
- **Ostrożność:** Modyfikowany kod ma ponad 10 lat. Podchodź do wszelkich zmian z najwyższą ostrożnością, analizując potencjalny wpływ na istniejącą funkcjonalność.
- **Bezpieczeństwo:** Priorytetem jest unikanie wprowadzania błędów regresji i zachowanie stabilności aplikacji.
