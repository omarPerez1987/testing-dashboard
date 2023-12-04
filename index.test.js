const rooms = require("./JSON/rooms.json");
const bookings = require("./JSON/bookings.json");

const { Room, Booking } = require("./index");

describe("Clase Room", () => {
  describe("Método isOccupied", () => {
    test("devuelve falso si no está ocupado", () => {
      const room = new Room(
        rooms[0].room,
        rooms[0].price,
        rooms[0].discount,
        [bookings[0]] //checkin: 05-12-2022, checkout: 12-12-2022
      );
      expect(room.isOccupied("25-12-2022")).toBe(false);
    });

    test("devuelve verdadero si está ocupado", () => {
      const room = new Room(
        rooms[0].room,
        rooms[0].price,
        rooms[0].discount,
        [bookings[0]] //checkin: 05-12-2022, checkout: 12-12-2022
      );
      expect(room.isOccupied("10-12-2022")).toBe(true);
    });
  });

  describe("Método occupancyPercentage", () => {
    test("devuelve el porcentaje de días con ocupación dentro del rango de fechas proporcionadas (inclusive)", () => {});
    const room = new Room(
      rooms[0].room,
      rooms[0].price,
      rooms[0].discount,
      [bookings[0]]
    );
    const percentage = room.occupancyPercentage("01-12-2023", "31-12-2023");
    expect(percentage).toBeGreaterThan(0);
    expect(percentage).toBeLessThanOrEqual(100);
  });

  describe("Método totalOccupancyPercentage", () => {
    test("debería calcular correctamente el porcentaje de ocupación total en todas las habitaciones", () => {});
  });

  describe("Método availableRooms", () => {
    test("debería identificar correctamente las habitaciones que no están ocupadas durante toda la duración", () => {});
  });
});

// *****************************************************************************

describe("Clase Booking", () => {
  describe("Getter fee", () => {
    test("debería calcular correctamente la tarifa de la reserva con descuentos", () => {});
  });
});