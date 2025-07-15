import { z } from 'zod';

export const registerSchema = z.object({
  nombre: z
    .string()
    .min(1, 'El nombre es obligatorio') // Asegura que no esté vacío
    .refine((val) => /^[a-zA-Z]+$/.test(val), {
      // Valida que solo contenga letras (mayúsculas o minúsculas).
      // Esto excluye números, tildes, espacios internos, espacios al inicio/final
      // y caracteres especiales, previniendo inyección SQL.
      message: 'El nombre solo debe contener letras (mayúsculas o minúsculas), sin espacios (ni al inicio, ni al final, ni intermedios), números, tildes o caracteres especiales.',
    }),
  correo: z
  .string()
  .min(1, 'El correo es obligatorio')
  // 🚫 Espacios al inicio o al final
  .refine((correo) => correo === correo.trim(), {
    message: 'El correo no debe tener espacios al inicio o al final',
  })
  // 🚫 Espacios internos
  .refine((correo) => !/\s/.test(correo), {
    message: 'El correo no debe contener espacios en blanco en medio',
  })
  // 🚫 Caracteres peligrosos
  .refine((correo) => !/[<>'"%;()\\]/.test(correo), {
    message: 'El correo contiene caracteres no permitidos',
  })
  // ✅ Formato general
  .refine((correo) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo), {
      message: 'El formato del correo electrónico es inválido.\n Ejm usuario@dominio.com no debe Contenes espacios ni caracteres especiales.',
    }
  ),

   contraseña: z
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    // ✅ Al menos una minúscula
    .refine((val) => /[a-z]/.test(val), {
      message: 'La contraseña debe contener al menos una letra minúscula',
    })
    // ✅ Al menos una mayúscula
    .refine((val) => /[A-Z]/.test(val), {
      message: 'La contraseña debe contener al menos una letra mayúscula',
    })
    // ✅ Al menos un número
    .refine((val) => /[0-9]/.test(val), {
      message: 'La contraseña debe contener al menos un número',
    })
    // ✅ Al menos un carácter especial
    .refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), {
      message: 'La contraseña debe contener al menos un carácter especial',
    })
    // ❌ No tildes ni letras acentuadas
    .refine((val) => /^[^\u00C0-\u017F]*$/.test(val), {
      message: 'La contraseña no debe contener tildes ni letras acentuadas',
    }),
  id_rol: z
    .coerce
    .number({ invalid_type_error: 'El rol debe ser un número' })
    .int('El rol debe ser un número entero')
    .positive('El rol debe ser positivo'),
});
;



// 🔐 Validación de login
export const loginSchema = z.object({
  nombre: z.string().min(1, 'El nombre de usuario es obligatorio'),
  contraseña: z.string().min(1, 'La contraseña es obligatoria')
});

// 🛠️ Validación de actualización de usuario
export const userStatusSchema = z.object({
  nombre: z.string().min(1, 'El nombre es obligatorio'),
  correo: z.string().email('Correo electrónico inválido'),
  id_rol: z.number().int().positive('El id_rol debe ser un número positivo'),
  estado: z.enum(['Activo', 'Inactivo'], { errorMap: () => ({ message: 'Estado inválido' }) })
});

// 🔄 Validación para cambiar solo el estado
export const userStateSchema = z.object({
  estado: z.enum(['Activo', 'Inactivo'], {
    errorMap: () => ({ message: 'Estado debe ser Activo o Inactivo' })
  })
});
