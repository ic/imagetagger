# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-21 15:52
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('annotations', '0014_auto_20170907_1407'),
    ]

    operations = [
        migrations.AddField(
            model_name='annotationtype',
            name='description',
            field=models.TextField(default=''),
        ),
    ]