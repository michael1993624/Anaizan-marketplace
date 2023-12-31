from dj_rest_auth.registration.serializers import RegisterSerializer
from django.contrib.auth.models import Group
from rest_framework import serializers
from django.contrib.auth import get_user_model

from apps.accounts.models import GroupProfile

User = get_user_model()


class UserDetailsSerializer(serializers.ModelSerializer):
    country_name = serializers.SerializerMethodField(method_name='get_country_name', read_only=True)

    def get_country_name(self, obj):
        return obj.country.name

    class Meta:
        model = User
        fields = ['username', 'email', 'name', 'photo', 'dob', 'gender', 'country', 'country_name']
        read_only_fields = ('username', 'email')
        extra_kwargs = {
            'country': {'write_only': True},
        }


class CustomRegisterSerializer(RegisterSerializer):
    def custom_signup(self, request, user):
        role = request.data.get('groups')
        user.is_staff = True
        user.save()
        if role:
            user.groups.set(role)
            user.save()


class GroupProfileSerializers(serializers.ModelSerializer):
    class Meta:
        model = GroupProfile
        fields = ['role', ]


class GroupSerializers(serializers.ModelSerializer):
    ROLE_CHOICES = (
        1, 'Staff',
        2, 'Seller'
    )
    groupprofile = GroupProfileSerializers()

    class Meta:
        model = Group
        fields = ['id', 'name', 'groupprofile']

    def create(self, validated_data):
        role_data = validated_data.pop('groupprofile')
        group = Group.objects.create(**validated_data)
        GroupProfile.objects.create(group=group, **role_data)
        return group
