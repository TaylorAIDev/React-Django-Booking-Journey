# Generated by Django 2.2.10 on 2021-05-18 17:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vacation', '0006_city'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserCity',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.IntegerField(max_length=20)),
                ('city_name', models.CharField(max_length=150)),
                ('matching_score', models.IntegerField(max_length=20)),
                ('users_rating', models.IntegerField(max_length=20)),
            ],
            options={
                'db_table': 'user_cities_matching',
            },
        ),
    ]