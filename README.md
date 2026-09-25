# JR Portfolio

Portafolio personal desarrollado con Next.js para presentar proyectos, experiencia y contacto profesional.

## Descripción

Este proyecto funciona como una landing page moderna para un desarrollador de software, con:

- presentación personal y filosofía de trabajo
- sección de proyectos destacados
- cards de tecnologías
- formulario de contacto
- diseño oscuro y visual premium
- integración con Prisma + PostgreSQL para mensajes de contacto

## Tecnologías

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Prisma ORM
- PostgreSQL
- Resend (envíos de email)
- Lucide React
- React Icons

## Requisitos previos

Antes de correr el proyecto asegúrate de tener instalado:

- Node.js 20+
- npm o pnpm
- PostgreSQL
- una cuenta de Resend (si vas a usar el formulario de contacto real)

## Instalación

1. Clona el repositorio:

```bash
git clone <url-del-repositorio>
cd jr-portafolio
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env.local` en la raíz del proyecto con las variables necesarias:

```env
DATABASE_URL="postgresql://usuario:password@host:puerto/base_de_datos"
RESEND_API_KEY="tu_api_key_de_resend"
```

4. Genera el cliente de Prisma:

```bash
npx prisma generate
```

5. Ejecuta el proyecto en modo desarrollo:

```bash
npm run dev
```

Abre http://localhost:3000 para verla en el navegador.

## Variables de entorno

| Nombre | Descripción |
| --- | --- |
| `DATABASE_URL` | URL de conexión a PostgreSQL para Prisma |
| `RESEND_API_KEY` | API key de Resend para enviar emails del formulario |

## Base de datos

El proyecto usa Prisma con PostgreSQL.

Para inicializar la base de datos:

```bash
npx prisma migrate dev
```

## Scripts disponibles

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Estructura principal

```bash
.
├── app/
│   ├── actions/
│   ├── generated/
│   ├── globals.css
│   └── page.tsx
├── components/
│   └── layout/
├── lib/
├── prisma/
├── public/
├── .env.local
├── package.json
├── prisma.config.ts
├── tsconfig.json
├── README.md
└── next.config.ts
```

## Despliegue

Este proyecto está preparado para desplegarse en Vercel.

Antes del deploy, asegúrate de configurar en Vercel:

- `DATABASE_URL`
- `RESEND_API_KEY`

Luego, en la plataforma, importa el repositorio y usa la configuración por defecto de Next.js.

## Créditos

Proyecto personal desarrollado para mostrar trabajo, experiencia y enfoque profesional en desarrollo de software.
