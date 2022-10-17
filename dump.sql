--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

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
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT '2022-10-15 15:10:33.656903'::timestamp without time zone NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "shortUrl" text NOT NULL,
    url text NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT '2022-10-15 15:10:33.656903'::timestamp without time zone NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT '2022-10-15 15:10:33.656903'::timestamp without time zone NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: views; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.views (
    id integer NOT NULL,
    "urlId" integer NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT '2022-10-17 13:06:12.928953'::timestamp without time zone NOT NULL
);


--
-- Name: views_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.views_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: views_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.views_id_seq OWNED BY public.views.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: views id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.views ALTER COLUMN id SET DEFAULT nextval('public.views_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjU4NTc2MTJ9.uU3L8yjtLrfLlVwBnBPVNhuaJ_ADfgX-7vqcT9C8lIk', '2022-10-15 15:10:33.656903');
INSERT INTO public.sessions VALUES (3, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJpYXQiOjE2NjU4NTc4MDJ9.cnYuYGzU2cNYcAyIdbL2Mw6NMVySCL0A3Ms1xCGCchM', '2022-10-15 15:10:33.656903');
INSERT INTO public.sessions VALUES (2, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJpYXQiOjE2NjYwMjI0NzN9.yKxKlLK7QIp3d_OI15vuISxvV4uAc9TXDA66e5E2K78', '2022-10-17 13:01:13.813661');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (1, '0jOV_uBy', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-shiba-inu-dog-with-laptop-in-room-royalty-free-image-882303800-1551122520.jpg?crop=0.670xw:0.998xh;0.154xw,0.00240xh&resize=640:*', 1, '2022-10-15 15:10:33.656903');
INSERT INTO public.urls VALUES (2, 'rH-ufIW0', 'https://www.nurses.co.uk/Images/Blog/media/dfbbe0fb-ccab-4b32-8dfa-784ebf3e8804.png', 1, '2022-10-15 15:10:33.656903');
INSERT INTO public.urls VALUES (3, 'aocE_8PR', 'data:image/jpeg;base64,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', 1, '2022-10-15 15:10:33.656903');
INSERT INTO public.urls VALUES (4, '7D73qQw9', 'https://i.kym-cdn.com/entries/icons/original/000/041/444/sdc.jpg', 2, '2022-10-15 15:10:33.656903');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Dev Lucas', 'l.tavaresc@hotmail.com', '$2b$10$JCmqbT43yU3qCcKMFYzTsOh7PyN10TEJ/S9DnLXWwc42g7EuX7DzK', '2022-10-15 15:10:33.656903');
INSERT INTO public.users VALUES (2, 'Jhon doe', 'jhon.doe@email.com', '$2b$10$SvSDCush9WPFy91ycr5vyuW/syk/BPREl8BUUfbWkLMFMrq16j.x6', '2022-10-15 15:10:33.656903');
INSERT INTO public.users VALUES (3, 'Mark', 'mark@email.com', '$2b$10$RwoMLypBqe9Fm0n2HKmf...zlQSDxx7v9L20IJOUvdHWvJ2nJkxRC', '2022-10-15 15:10:33.656903');
INSERT INTO public.users VALUES (4, 'Ellen', 'ellen@email.com', '$2b$10$OzCV.ZKaDs5yYUEjJlmOFO8RkFM3DHjo66ufdSfQohsyfeupELeym', '2022-10-15 15:10:33.656903');


--
-- Data for Name: views; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.views VALUES (1, 4, 2, '2022-10-17 13:06:12.928953');
INSERT INTO public.views VALUES (2, 1, 1, '2022-10-17 13:06:12.928953');
INSERT INTO public.views VALUES (3, 1, 1, '2022-10-17 13:06:12.928953');
INSERT INTO public.views VALUES (4, 1, 1, '2022-10-17 13:06:12.928953');
INSERT INTO public.views VALUES (5, 1, 1, '2022-10-17 13:06:12.928953');
INSERT INTO public.views VALUES (6, 1, 1, '2022-10-17 13:06:12.928953');
INSERT INTO public.views VALUES (7, 1, 1, '2022-10-17 13:06:12.928953');
INSERT INTO public.views VALUES (8, 1, 1, '2022-10-17 13:06:12.928953');
INSERT INTO public.views VALUES (9, 1, 1, '2022-10-17 13:06:12.928953');
INSERT INTO public.views VALUES (10, 1, 1, '2022-10-17 13:06:12.928953');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 3, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 4, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: views_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.views_id_seq', 10, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: views views_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.views
    ADD CONSTRAINT views_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: views views_urlId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.views
    ADD CONSTRAINT "views_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES public.urls(id);


--
-- Name: views views_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.views
    ADD CONSTRAINT "views_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

