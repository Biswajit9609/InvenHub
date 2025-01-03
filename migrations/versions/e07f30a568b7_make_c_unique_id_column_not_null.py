"""Make C_unique_id column NOT NULL

Revision ID: e07f30a568b7
Revises: 8084af597d4a
Create Date: 2024-12-04 23:38:38.736388

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e07f30a568b7'
down_revision = '8084af597d4a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('category', schema=None) as batch_op:
        batch_op.alter_column('C_unique_id',
               existing_type=sa.VARCHAR(length=20),
               nullable=False)

    with op.batch_alter_table('product', schema=None) as batch_op:
        batch_op.alter_column('P_unique_id',
               existing_type=sa.VARCHAR(length=20),
               nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('product', schema=None) as batch_op:
        batch_op.alter_column('P_unique_id',
               existing_type=sa.VARCHAR(length=20),
               nullable=True)

    with op.batch_alter_table('category', schema=None) as batch_op:
        batch_op.alter_column('C_unique_id',
               existing_type=sa.VARCHAR(length=20),
               nullable=True)

    # ### end Alembic commands ###
