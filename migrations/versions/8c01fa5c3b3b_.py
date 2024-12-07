"""empty message

Revision ID: 8c01fa5c3b3b
Revises: b962470dca47
Create Date: 2024-12-05 00:37:11.341910

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8c01fa5c3b3b'
down_revision = 'b962470dca47'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('categories')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('categories',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('category_name', sa.VARCHAR(length=50), autoincrement=False, nullable=False),
    sa.Column('store_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('C_unique_id', sa.VARCHAR(length=20), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['store_id'], ['store.id'], name='categories_store_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='categories_pkey'),
    sa.UniqueConstraint('C_unique_id', name='categories_C_unique_id_key')
    )
    # ### end Alembic commands ###