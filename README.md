# 📄 Paperless HQ  

Paperless HQ is a modern platform that helps teams and individuals manage, sign, and store documents digitally — eliminating the hassle of printing, scanning, and physical paperwork.  

---

## ✨ Features  
- 📄 Upload and manage documents securely  
- 🖊️ Digital signatures support  
- 👥 Team collaboration and document sharing  
- 🔐 Role-based access control  
- ☁️ Cloud storage integration  
- 📊 Dashboard for tracking document status  

---

## 🚀 Tech Stack  
- **Frontend:** Next.js, Tailwind CSS, ShadCN  
- **Backend:** Node.js / Express (or Next.js API routes)  
- **Database:** PostgreSQL + Prisma ORM  
- **Infrastructure:** AWS, Docker, Kubernetes  
- **Others:** Recoil (state management), Framer Motion (UI animations)  

---

## Running Locally

> [!NOTE]  
> This project uses [pnpm](https://pnpm.io/) only as a package manager.

1. Clone the repository:

```bash
git clone https://github.com/rohankumarchaudhary67/paperlesshq.git
```

2. Navigate to the project directory:

```bash
cd paperlesshq
```
# Instant Docker Setup

> [!NOTE]  
> Your Docker Demon should be online

# Traditional Docker Setup

(Optional) Start a PostgreSQL database using Docker:

```bash
docker run -d \
--name cms-db \
-e POSTGRES_USER=myuser \
-e POSTGRES_PASSWORD=mypassword \
-e POSTGRES_DB=mydatabase \
-p 5432:5432 \
postgres
``` 



1. Create a .env file:

   - Copy `.env.example` and rename it to `.env`.


2. Install dependencies:

```bash
pnpm install
```

3. Run database migrations:

```bash
pnpm prisma:migrate
```

4. Generate prisma client

```bash
pnpm prisma generate
```

5. Seed the database:

```bash
pnpm db:seed
```

6. Start the development server:

```bash
pnpm dev
```

## Usage

1. Access the application in your browser:

```bash
http://localhost:3000
```

---
![Application Work Flow](./public/readme/application-work-flow.png)  
