"""create driver table

Revision ID: 157d43482139
Revises: 
Create Date: 2022-12-29 12:45:55.585664

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '157d43482139'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'drivers',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('driverId', sa.Integer, nullable=False),
        sa.Column('driverRef', sa.String, nullable=False),
        sa.Column('number', sa.Integer, nullable=True),
        sa.Column('code', sa.String(3), nullable=True),
        sa.Column('name', sa.String(100), nullable=False),
        sa.Column('surname', sa.String(100), nullable=False),
        sa.Column('birthday', sa.String, nullable=False),
        sa.Column('nationallity', sa.String(100), nullable=False),
        sa.Column('url', sa.String(250), nullable=False)
    )


def downgrade() -> None:
    op.drop_table('drivers')
