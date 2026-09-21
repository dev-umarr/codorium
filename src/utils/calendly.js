export function openBookingModal() {
    window.dispatchEvent(new CustomEvent('codorium:open-booking-modal'))
}

