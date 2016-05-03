USE beambeats;

DROP TABLE IF EXISTS visualization;

CREATE TABLE visualization (
    id              INT             NOT NULL    AUTO_INCREMENT,
    image           VARCHAR(255)    NOT NULL,
    datecreated     DATETIME       NOT NULL   DEFAULT CURRENT_TIMESTAMP,
    datemodified    TIMESTAMP       NOT NULL    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

INSERT INTO visualization(image) VALUES("sample.png");

DROP TABLE IF EXISTS creation;

CREATE TABLE creation (
    id              INT             NOT NULL    AUTO_INCREMENT,
    originalid      INT             NOT NULL,
    image           VARCHAR(255)    NOT NULL,
    datecreated     DATETIME       NOT NULL    DEFAULT CURRENT_TIMESTAMP,
    datemodified    TIMESTAMP       NOT NULL    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT fk_creation_originalid FOREIGN KEY (originalid) REFERENCES visualization(id)
);

DROP TABLE IF EXISTS history;

CREATE TABLE history (
    id              INT             NOT NULL    AUTO_INCREMENT,
    visualizationid INT             NOT NULL,
    datesent        DATETIME        NOT NULL    DEFAULT CURRENT_TIMESTAMP,
    email           VARCHAR(255)    NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_history_visualizationid FOREIGN KEY (visualizationid) REFERENCES creation(id)
);
