# 고차 귀납 타입

# 개요

고차 귀납 타입은 점을 짓는 생성자와 함께 경로를 짓는 생성자를 지정하는 귀납 타입이다. [호모토피 타입 이론](homotopy-type-theory.md)에서 등식 타입의 항이 경로이므로, 생성자가 등식 타입의 항을 직접 내놓을 수 있다.

$$
\mathrm{base}\colon S^1,\qquad \mathrm{loop}\colon \mathrm{base}=\_{S^1}\mathrm{base}
$$

이 두 생성자로 원을 타입으로 짓는다. 보통의 귀납 타입이 점만 생성하므로 위상공간을 쓰지 않고 공간을 정의하는 수단이 여기서 나온다.

# 직관

자연수 타입은 생성자 $0$ 과 $\mathrm{succ}$ 로 짓고, 그 타입에서 다른 타입으로 가는 사상은 두 생성자의 상을 정하면 결정된다. 같은 방식으로 원을 지으려고 한다.

점 하나만 생성자로 두면 $\mathbf 1$ 이 나온다. 이 타입의 등식 타입은 모두 수축 가능하므로 돌아오는 경로가 반사성 하나뿐이고, 원이 되지 않는다. 점 둘과 그 사이의 경로 둘을 두어도 경로 생성자를 쓰지 않는 한 등식 타입은 그대로다.

필요한 것은 $\mathrm{base}$ 에서 $\mathrm{base}$ 로 돌아오는 경로를 반사성과 별개로 두는 것이다. 그래서 등식 타입 $\mathrm{base}=\mathrm{base}$ 의 항을 생성자로 선언한다.

생성자를 늘리면 제거자도 늘어난다. 자연수에서 사상을 정할 때 $0$ 의 상과 $\mathrm{succ}$ 의 상을 주었듯, 원에서 사상을 정할 때는 $\mathrm{base}$ 의 상인 점 하나와 $\mathrm{loop}$ 의 상인 경로 하나를 준다.

# 정의

## 원

$S^1$ 은 점 생성자 $\mathrm{base}$ 와 경로 생성자 $\mathrm{loop}\colon \mathrm{base}=\mathrm{base}$ 로 생성한 타입이다.

재귀 원리는 다음과 같다. 타입 $B$ 와 항 $b\colon B$ 와 경로 $p\colon b=\_B b$ 가 주어지면 사상 $f\colon S^1\to B$ 가 있고, $f(\mathrm{base})=b$ 이며 $f$ 가 $\mathrm{loop}$ 를 $p$ 로 보낸다.

$$
\frac{b\colon B\qquad p\colon b=\_B b}{\mathrm{rec}(b,p)\colon S^1\to B}
$$

귀납 원리는 타입족 $P\colon S^1\to\mathcal U$ 에 대한 판이다. 항 $b\colon P(\mathrm{base})$ 와, $\mathrm{loop}$ 를 따라 $b$ 를 옮긴 것이 다시 $b$ 라는 경로가 주어지면 $\prod\_{x\colon S^1}P(x)$ 의 항이 나온다. 옮기는 연산 $\mathrm{transport}^P$ 는 경로 유도로 정의한다.

$$
\frac{b\colon P(\mathrm{base})\qquad q\colon \mathrm{transport}^P(\mathrm{loop},b)=b}{\mathrm{ind}(b,q)\colon \prod\_{x\colon S^1}P(x)}
$$

## 매달기

타입 $A$ 의 매달기 $\Sigma A$ 는 점 생성자 $\mathrm{N},\mathrm{S}$ 와 각 $a\colon A$ 마다 경로 생성자 $\mathrm{merid}(a)\colon \mathrm{N}=\mathrm{S}$ 로 생성한다.

$$
\mathrm{N},\mathrm{S}\colon \Sigma A,\qquad \mathrm{merid}\colon A\to(\mathrm{N}=\_{\Sigma A}\mathrm{S})
$$

## 명제적 절단

타입 $A$ 의 명제적 절단 $\Vert A\Vert$ 는 사상 $\vert\cdot\vert\colon A\to\Vert A\Vert$ 와, 모든 $x,y\colon\Vert A\Vert$ 에 대한 경로 생성자로 생성한다. 뒤의 생성자가 $\Vert A\Vert$ 를 명제로 만든다.

## 집합 몫

집합 $A$ 와 그 위의 관계 $R$ 에 대해 몫 $A/R$ 은 사상 $A\to A/R$ 과, $R(a,b)$ 마다 두 상을 잇는 경로 생성자, 그리고 등식 타입을 명제로 만드는 생성자로 생성한다.

# 성질

## 사상의 결정

**정리.** $S^1\to B$ 꼴 사상은 $B$ 의 점 하나와 그 점의 루프 하나로 결정된다. 즉 $(S^1\to B)\simeq\sum\_{b\colon B}(b=\_B b)$ 다.

증명의 요지. 재귀 원리가 오른쪽에서 왼쪽으로 가는 사상을 주고, 사상 $f$ 를 $(f(\mathrm{base}),\mathrm{ap}\_f(\mathrm{loop}))$ 로 보내면 반대 방향이 된다. 두 합성이 항등과 같음을 귀납 원리로 보인다[^1].

## 구면의 구성

**정리.** $\Sigma S^n\simeq S^{n+1}$ 이다.

매달기의 두 극을 잇는 경로가 $S^n$ 의 점마다 하나씩 있으므로, 두 극을 붙여 얻는 타입이 $S^{n+1}$ 의 생성자와 같은 자료를 준다. 이 동치로 구면 전체를 $S^0$ 에서 매달기를 되풀이해 짓는다.

## 절단과 존재 양화

**정리.** $\Vert A\Vert$ 는 명제이고, 명제 $P$ 에 대해 $(\Vert A\Vert\to P)\simeq(A\to P)$ 다.

증명의 요지. 왼쪽에서 오른쪽은 $\vert\cdot\vert$ 와의 합성이다. 반대 방향은 절단의 재귀 원리이고, $P$ 가 명제라는 조건이 경로 생성자의 상을 결정한다. 이 성질로 존재 양화 $\exists$ 를 $\Vert\sum\Vert$ 로 정의하면 증거를 감춘 존재 진술이 나온다[^2].

## 집합성의 보존

**정리.** 집합 몫 $A/R$ 은 집합이고, $R$ 이 동치관계이면 $(a=\_{A/R}b)\simeq R(a,b)$ 다.

증명의 요지. 등식 타입을 명제로 만드는 생성자가 집합성을 준다. 두 번째 진술은 $R$ 로 정의한 타입족을 몫 위로 올리고 양쪽 사상을 지어 얻는다[^2].

# 활용

- **수 체계의 구성.** 정수를 자연수 쌍의 집합 몫으로, 유리수를 정수 쌍의 집합 몫으로 짓는다. 실수는 Cauchy 수열의 몫을 고차 귀납 타입으로 지어 선택 공리 없이 완비성을 얻는다[^2].
- **호모토피 군 계산.** 구면을 매달기로 짓고 [호모토피 군](homotopy-groups.md)을 등식 타입의 절단으로 정의하면, Freudenthal 매달기 정리를 타입 이론 안에서 증명한다. $\pi\_{n}(S^n)\cong\mathbb Z$ 가 그 결과다.
- **논리의 층위 분리.** 절단으로 명제 층위를 만들면 증거를 쥔 존재와 증거를 감춘 존재를 구별한다. 선택 공리와 배중률을 절단 층위에서만 가정하는 체계를 세울 수 있다.
- **기하 대상의 정의.** 꼭짓점과 간선을 생성자로 주면 그래프의 기하적 실현이, 세포와 붙임 경로를 주면 [CW 복합체](cw-complexes.md)(CW complex, closure-finite weak topology)에 대응하는 타입이 나온다.

[^1]: The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, §6 — 고차 귀납 타입의 생성자와 제거자, 원과 구간과 매달기의 정의. https://homotopytypetheory.org/book/
[^2]: 같은 책 §6.9–6.11 과 §11 — 명제적 절단, 집합 몫, Cauchy 실수의 구성. https://homotopytypetheory.org/book/

# 연관 문서

## 선수지식

- [호모토피 타입 이론](homotopy-type-theory.md)

## 더 알아보기

아직 연결한 문서가 없다.

#foundations #logic #algebraic_topology
