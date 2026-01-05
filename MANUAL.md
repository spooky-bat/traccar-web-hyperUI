# Instrukcja Konfiguracji

W tym dokumencie znajdziesz instrukcje, jak skonfigurować nowe funkcje w aplikacji Traccar.

## Konfiguracja

### Wybór koloru dla atrybutów

Od teraz, dla wszystkich atrybutów związanych z kolorem, masz możliwość wyboru koloru zarówno poprzez wpisanie kodu heksadecymalnego, jak i za pomocą wizualnego selektora kolorów.

1.  Zaloguj się na swoje konto administratora.
2.  Przejdź do `Ustawienia` -> `Serwer` (lub innej sekcji, gdzie dostępne są atrybuty koloru).
3.  W sekcji `Atrybuty` znajdź pole odpowiadające za kolor (np. `Map Side Panel Color`, `Map Status Card Color`, `Primary Color`, `Secondary Color`).
4.  **Wprowadzanie ręczne:** Możesz nadal wpisać kod koloru w formacie heksadecymalnym (np. `#RRGGBB` lub `#RGB`) bezpośrednio do pola tekstowego. System posiada walidację formatu.
5.  **Wybór z palety:** Obok pola tekstowego koloru znajduje się ikona palety (`🎨`). Kliknięcie tej ikony otworzy wizualny selektor kolorów.
6.  Wybierz żądany kolor za pomocą selektora. Po wybraniu kolor automatycznie zostanie wprowadzony do pola tekstowego.
7.  Jeśli wprowadzisz nieprawidłowy format koloru ręcznie, przycisk `Zapisz` zostanie zablokowany.
8.  Zapisz zmiany.

### Kolor tła panelu bocznego na mapie

Aby zmienić kolor tła panelu bocznego (wraz z nagłówkiem) z listą urządzeń na ekranie mapy, wykonaj następujące kroki:

1.  Zaloguj się na swoje konto administratora.
2.  Przejdź do `Ustawienia` -> `Serwer`.
3.  W sekcji `Atrybuty` znajdź atrybut o nazwie `Map Side Panel Color` (lub `Kolor panelu bocznego mapy` w polskiej wersji językowej).
4.  Wprowadź wybrany kolor w formacie heksadecymalnym (`#RRGGBB` lub `#RGB`) lub użyj ikony palety, aby wybrać kolor wizualnie. Pole posiada walidację i nie pozwoli na zapisanie nieprawidłowego formatu. Placeholder w polu (`#RRGGBB`) podpowiada oczekiwany format.
5.  Jeśli format koloru jest nieprawidłowy, przycisk `Zapisz` będzie nieaktywny.
6.  Zapisz zmiany.

Kolor panelu bocznego oraz jego nagłówka zostanie zaktualizowany po odświeżeniu strony.

### Kolor tła karty statusu urządzenia

Aby zmienić kolor tła karty statusu, która pojawia się po kliknięciu na urządzenie, wykonaj następujące kroki:

1.  Zaloguj się na swoje konto administratora.
2.  Przejdź do `Ustawienia` -> `Serwer`.
3.  W sekcji `Atrybuty` znajdź atrybut o nazwie `Map Status Card Color` (lub `Kolor karty statusu na mapie` w polskiej wersji językowej).
4.  Wprowadź wybrany kolor w formacie heksadecymalnym (`#RRGGBB` lub `#RGB`) lub użyj ikony palety, aby wybrać kolor wizualnie. Pole posiada walidację i nie pozwoli na zapisanie nieprawidłowego formatu.
5.  Jeśli format koloru jest nieprawidłowy, przycisk `Zapisz` będzie nieaktywny.
6.  Zapisz zmiany.

Kolor tła karty statusu zostanie zaktualizowany po odświeżeniu strony.