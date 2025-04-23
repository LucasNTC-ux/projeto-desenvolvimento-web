-- CreateTable
CREATE TABLE "AlocacaoProjeto" (
    "id" SERIAL NOT NULL,
    "tecnico" TEXT NOT NULL,
    "id_tecnico" INTEGER NOT NULL,
    "projeto_categoria" TEXT NOT NULL,
    "id_projeto_categoria" INTEGER NOT NULL,
    "usuario" TEXT NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "cliente" TEXT NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "qtd_horas_alocadas" DOUBLE PRECISION NOT NULL,
    "qtd_horas_comerciais" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "AlocacaoProjeto_pkey" PRIMARY KEY ("id")
);
