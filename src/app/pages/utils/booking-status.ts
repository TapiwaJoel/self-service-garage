export const enum BookingStatus {
  PENDING = 'PENDING',
  AWAIT_DEPARTMENT_APPROVAL = 'AWAIT_DEPARTMENT_APPROVAL',
  DEPARTMENT_APPROVED = 'DEPARTMENT_APPROVED',
  DEPARTMENT_DISAPPROVED = 'DEPARTMENT_DISAPPROVED',
  AWAIT_PAYMENT = 'AWAIT_PAYMENT',
  AWAIT_PARTS = 'AWAIT_PARTS',
  AWAIT_RESOURCE = 'AWAIT_RESOURCE',
  HALT = 'HALT',
  PROCESSING = 'PROCESSING',
  PROCESSED = 'PROCESSED',
  AWAIT_DISPATCH = 'AWAIT_DISPATCH',
  DISPATCH = 'DISPATCH',
}
