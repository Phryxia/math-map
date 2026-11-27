# Ptolemy 부등식

# 개요

**Ptolemy 부등식(Ptolemy's inequality)** 은 사각형의 마주 보는 변끼리 길이를 곱해 더한 값이 두 대각선의 길이의 곱 이상이라는 부등식이다. 가로 $4$, 세로 $3$ 인 직사각형은 $4\cdot 4+3\cdot 3=25=5\cdot 5$ 로 두 값이 같지만, 꼭짓점 하나를 직사각형의 외접원 밖으로 옮기면 대각선 쪽이 작아진다. 두 값이 같은지는 네 꼭짓점이 한 원 위에 있는지로 정해지고, 꼭짓점을 [복소수](complex-numbers.md)로 놓으면 항등식 하나와 삼각부등식으로 증명된다.

# 직관

꼭짓점을 $A=0$, $B=4$, $C=4+3i$, $D=3i$ 로 놓는다. 마주 보는 변의 곱의 합은 $AB\cdot CD+AD\cdot BC=4\cdot 4+3\cdot 3=25$ 이고, 대각선은 둘 다 길이 $5$ 이므로 그 곱도 $25$ 다. 직사각형의 꼭짓점은 대각선을 지름으로 하는 원 위에 있다.

$D$ 를 $4i$ 로 옮기면 $D$ 는 그 원을 벗어난다. 길이를 다시 재면 다음이 나온다.

$$
AB\cdot CD+AD\cdot BC=4\sqrt{17}+12\approx 28.49,\qquad AC\cdot BD=5\cdot 4\sqrt2\approx 28.28
$$

대각선 쪽이 작아졌다. 네 점을 복소수 $a,b,c,d$ 로 보면 다음 항등식이 성립한다. 양변을 전개하면 둘 다 $ab-ad-bc+cd$ 다.

$$
(a-c)(b-d)=(a-b)(c-d)+(a-d)(b-c)
$$

절댓값을 취하고 삼각부등식을 쓰면 $AC\cdot BD\le AB\cdot CD+AD\cdot BC$ 가 모든 네 점에서 나온다. 등호는 오른쪽 두 항이 원점에서 같은 방향에 있을 때다. 직사각형에서는 두 항이 $(-4)\cdot 4=-16$ 과 $(-3i)(-3i)=-9$ 로 같은 방향이다.

# 정의

## Ptolemy 부등식

평면의 네 점 $A,B,C,D$ 에 대해 다음 부등식을 Ptolemy 부등식이라 한다.

$$
AC\cdot BD\le AB\cdot CD+AD\cdot BC
$$

$AC$, $BD$ 는 사각형 $ABCD$ 의 대각선이고 $AB$ 와 $CD$, $AD$ 와 $BC$ 는 마주 보는 변이다. 직관 절의 직사각형에서 등호가, $D=4i$ 로 옮긴 사각형에서 순부등호가 성립했다.

## Ptolemy 거리공간

[거리 공간](metric-spaces.md) $(X,\rho)$ 의 모든 네 점 $x,y,z,w$ 가 다음을 만족하면 $X$ 를 **Ptolemy 거리공간(Ptolemaic metric space)** 이라 한다.

$$
\rho(x,z)\rho(y,w)\le\rho(x,y)\rho(z,w)+\rho(x,w)\rho(y,z)
$$

평면에 보통 거리를 준 것이 Ptolemy 거리공간이라는 것이 위 부등식이다. 평면에 최대 거리 $\rho(p,q)=\max(\vert p\_1-q\_1\vert,\vert p\_2-q\_2\vert)$ 를 주면 Ptolemy 거리공간이 아니다. 네 점 $(-1,0)$, $(0,-1)$, $(1,0)$, $(0,1)$ 에서 네 변이 모두 $1$, 두 대각선이 모두 $2$ 이므로 $2\cdot 2\gt 1\cdot 1+1\cdot 1$ 이다.

# 성질

## 등호 조건

서로 다른 네 점 $a,b,c,d$ 에서 Ptolemy 부등식의 등호는 네 점이 이 순서로 한 원 위에 있거나 이 순서로 한 직선 위에 있을 때만 성립한다. 이 경우의 등식을 **Ptolemy 정리(Ptolemy's theorem)** 라 한다.

증명의 요지. 삼각부등식의 등호는 $(a-b)(c-d)$ 와 $(a-d)(b-c)$ 의 비가 양의 실수일 때다. 이 비에 $-1$ 을 곱한 것이 [Möbius 변환](mobius-transformations.md) 문서의 복비 $(a,c;b,d)$ 이므로, 등호는 복비가 음의 실수인 것과 동치다. 복비가 실수이면 네 점은 한 일반화된 원 위에 있고, 그 원을 실수축으로 옮겨 계산하면, 복비가 음수인 것은 $a$ 와 $c$ 가 원을 두 호로 나눌 때 $b$ 와 $d$ 가 서로 다른 호에 있는 것, 곧 원 위에서 네 점이 $a,b,c,d$ 순서로 놓이는 것과 동치다.

## 내적 공간의 Ptolemy 부등식

모든 [내적 공간](inner-product-spaces.md)은 Ptolemy 거리공간이다. 증명에는 반전 $x\mapsto x/\Vert x\Vert^2$ 을 쓴다. $0$ 이 아닌 $x,y$ 에 대해 내적을 전개하면 다음이 나온다.

$$
\left\Vert\frac{x}{\Vert x\Vert^2}-\frac{y}{\Vert y\Vert^2}\right\Vert=\frac{\Vert x-y\Vert}{\Vert x\Vert\thinspace\Vert y\Vert}
$$

$a=0$ 으로 평행이동하고 $b,c,d$ 의 반전에 삼각부등식 $\Vert b'-d'\Vert\le\Vert b'-c'\Vert+\Vert c'-d'\Vert$ 를 쓴 뒤 $\Vert b\Vert\thinspace\Vert c\Vert\thinspace\Vert d\Vert$ 를 곱하면 Ptolemy 부등식이 된다. 이 증명은 차원에 기대지 않으므로 공간의 네 점에서도 성립한다.

## Schoenberg 의 내적 공간 판정

노름 공간이 내적 공간인 것과 그 노름이 주는 거리가 Ptolemy 거리공간인 것은 동치다. 이것은 Schoenberg 가 증명했다[^1]. 한쪽은 위 절의 증명이다. 정의 절의 최대 거리는 평행사변형 법칙을 만족하지 않는 노름에서 오고, Ptolemy 부등식도 깨졌다.

# 활용

- 삼각함수의 덧셈 정리. 지름이 $1$ 인 원에 내접하고 한 대각선이 지름인 사각형에 Ptolemy 정리를 쓰면, 원 안의 현의 길이가 그 원주각의 사인이므로 $\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta$ 가 나온다. Ptolemy 는 이 계산으로 현의 길이 표를 만들었다.
- Möbius 변환. 두 곱의 비 $AB\cdot CD/(AD\cdot BC)$ 는 복비 $(a,c;b,d)$ 의 절댓값이므로 Möbius 변환으로 바뀌지 않는다. 그래서 Ptolemy 정리는 원을 직선으로 보내는 변환으로 옮겨도 성립한다.
- 노름 공간의 판정. Schoenberg 의 판정에 따라 노름이 내적에서 오는지를 평행사변형 법칙 대신 Ptolemy 부등식으로 판정한다.

[^1]: I. J. Schoenberg, "A remark on M. M. Day's characterization of inner-product spaces and a conjecture of L. M. Blumenthal", *Proceedings of the American Mathematical Society* **3** (1952), 961–964.

# 연관 문서

## 선수지식

- [Möbius 변환](mobius-transformations.md)
- [내적 공간](inner-product-spaces.md)

## 더 알아보기

- [삼각형의 Carnot 정리](carnot-theorem.md)

#complex_analysis #analysis #linear_algebra
