---
format:
  hugo-md:
    code-fold: false
parent: null
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
deck: ""
date: '{{ .Date }}'
tags: []

execute:
  echo: true
  freeze: auto
jupyter: python3
---
Content.