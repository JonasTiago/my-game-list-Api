--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-1ubuntu1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-1ubuntu1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


--
-- Name: games; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.games (
    id integer NOT NULL,
    name text NOT NULL,
    platform text NOT NULL,
    genre text NOT NULL,
    status text NOT NULL,
    "gameTime" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: games_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.games_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: games_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.games_id_seq OWNED BY public.games.id;


--
-- Name: games id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.games ALTER COLUMN id SET DEFAULT nextval('public.games_id_seq'::regclass);


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public._prisma_migrations VALUES ('9963dfcc-52b9-445b-b552-f544a8aec1da', '2f7a10b9bc8a52fa3fb697a1de8122a4b3b094822a6758ee78100466cb3ae336', '2023-01-23 11:48:07.12352-03', '20230123123850_create_games', NULL, NULL, '2023-01-23 11:48:07.116701-03', 1);
INSERT INTO public._prisma_migrations VALUES ('d40d04d4-2428-4903-b601-d5a1fca6005c', '3da7ea8e7a50eb7c0d6ceac7ab32cea1673178fa248398a78f6501c93227d767', '2023-01-23 11:48:07.129391-03', '20230123144611_', NULL, NULL, '2023-01-23 11:48:07.124534-03', 1);


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.games VALUES (1, 'Pes2013', 'xbox', 'sport', 'finished', 120, '2023-01-23 14:49:44.562');
INSERT INTO public.games VALUES (8, 'God of War', 'playStation', 'sport', 'playing', 60, '2023-01-23 18:04:59.478');
INSERT INTO public.games VALUES (11, 'GoW2', 'playStation', 'sport', 'playing', 60, '2023-01-23 18:41:27.409');


--
-- Name: games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.games_id_seq', 11, true);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (id);


--
-- Name: games_name_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX games_name_key ON public.games USING btree (name);


--
-- PostgreSQL database dump complete
--

