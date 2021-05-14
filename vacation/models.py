from django.db import models

# Create your models here.

class User(models.Model):
    user_ip = models.GenericIPAddressField()
    time_stamp = models.DateTimeField(auto_now_add=True)
    solo = models.PositiveSmallIntegerField(default=0)
    couple = models.PositiveSmallIntegerField(default=0)
    family = models.PositiveSmallIntegerField(default=0)
    friends = models.PositiveSmallIntegerField(default=0)
    weekend = models.PositiveSmallIntegerField(default=0)
    long_weekend = models.PositiveSmallIntegerField(default=0)
    weekish = models.PositiveSmallIntegerField(default=0)
    midweek = models.PositiveSmallIntegerField(default=0)
    two_weeks = models.PositiveSmallIntegerField('2_Weeks',default=0)
    three_weeks = models.PositiveSmallIntegerField('3_Weeks',default=0)
    four_weeks = models.PositiveSmallIntegerField('4_Weeks',default=0)
    five_weeks = models.PositiveSmallIntegerField('5_Weeks',default=0)
    beach = models.PositiveSmallIntegerField(default=0)
    city_life = models.PositiveSmallIntegerField(default=0)
    nature = models.PositiveSmallIntegerField(default=0)
    countryside = models.PositiveSmallIntegerField(default=0)
    surprise = models.PositiveSmallIntegerField(default=0)
    other = models.PositiveSmallIntegerField(default=0)
    adventures = models.PositiveSmallIntegerField(default=0)
    shopping = models.PositiveSmallIntegerField(default=0)
    romantic = models.PositiveSmallIntegerField(default=0)
    ski = models.PositiveSmallIntegerField(default=0)
    remote = models.PositiveSmallIntegerField(default=0)
    wildlife = models.PositiveSmallIntegerField(default=0)
    hiking = models.PositiveSmallIntegerField(default=0)
    road_trip = models.PositiveSmallIntegerField(default=0)
    festivals = models.PositiveSmallIntegerField(default=0)
    nightlife = models.PositiveSmallIntegerField(default=0)
    holidays = models.PositiveSmallIntegerField(default=0)
    vivid = models.PositiveSmallIntegerField(default=0)
    coltural_experience = models.PositiveSmallIntegerField(default=0)
    camping = models.PositiveSmallIntegerField(default=0)
    surfing = models.PositiveSmallIntegerField(default=0)
    honeymoon = models.PositiveSmallIntegerField(default=0)
    budget_low = models.PositiveSmallIntegerField(default=0)
    budget_normal = models.PositiveSmallIntegerField(default=0)
    budget_high = models.PositiveSmallIntegerField(default=0)
    one_passengers = models.PositiveSmallIntegerField('1_Passengers',default=0)
    two_passengers = models.PositiveSmallIntegerField('2_Passengers',default=0)
    three_passengers = models.PositiveSmallIntegerField('3_Passengers',default=0)
    four_passengers = models.PositiveSmallIntegerField('4_Passengers',default=0)
    five_passengers = models.PositiveSmallIntegerField('5_Passengers',default=0)
    january = models.PositiveSmallIntegerField('6_Passengers',default=0)
    february = models.PositiveSmallIntegerField(default=0)
    march = models.PositiveSmallIntegerField(default=0)
    april = models.PositiveSmallIntegerField(default=0)
    may = models.PositiveSmallIntegerField(default=0)
    june = models.PositiveSmallIntegerField(default=0)
    july = models.PositiveSmallIntegerField(default=0)
    august = models.PositiveSmallIntegerField(default=0)
    september = models.PositiveSmallIntegerField(default=0)
    october = models.PositiveSmallIntegerField(default=0)
    november = models.PositiveSmallIntegerField(default=0)
    december = models.PositiveSmallIntegerField(default=0)
    comp_allgirls = models.PositiveSmallIntegerField(default=0)
    comp_alboys = models.PositiveSmallIntegerField(default=0)
    comp_elderly = models.PositiveSmallIntegerField(default=0)
    comp_kids_babies = models.PositiveSmallIntegerField(default=0)

    class Meta:
        db_table = "users_features"