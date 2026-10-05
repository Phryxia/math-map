# 호모토피 타입 이론

# 개요

호모토피 타입 이론(homotopy type theory, HoTT)은 타입을 공간으로, 등식의 증명을 경로로 읽는 타입 이론이다. [Curry–Howard 대응](curry-howard.md)이 명제를 타입으로 보았다면, 여기서는 타입 $A$ 의 두 항 $a,b$ 에 대한 등식 타입 $a=\_A b$ 의 항을 $a$ 에서 $b$ 로 가는 경로로 본다.

$$
\text{타입}=\text{공간},\qquad \text{항}=\text{점},\qquad a=\_A b\ \text{의 항}=\text{경로}
$$

일가성 공리는 두 타입 사이의 동치를 그 둘의 등식과 같은 것으로 삼는다. 이 공리 아래 동형인 구조는 모든 성질을 공유하므로, 구조를 동형까지만 지정하는 수학의 관행이 형식 체계 안의 정리가 된다.

# 직관

$2+2=4$ 를 증명하는 항은 계산 하나다. 이 등식의 항을 둘 만들어도 둘이 서로 같음을 다시 증명할 수 있고, 등식의 증명이 하나뿐인 타입을 집합이라 부른다.

모든 타입이 집합은 아니다. 타입 $A$ 와 $B$ 사이에 서로 역인 함수 $f\colon A\to B$ 와 $g\colon B\to A$ 가 있을 때 $A=B$ 를 증명하려고 한다. 등식도 타입이므로 그 항을 만들어야 하는데, 타입 이론의 규칙은 $A$ 와 $B$ 가 같은 꼴로 지어진 경우에만 항을 준다. $f$ 와 $g$ 에서 $A=B$ 의 항을 짓는 규칙이 없다.

그래서 그 항을 공리로 넣는다. 이것이 일가성 공리이고, $A\simeq B$ 의 항마다 $A=B$ 의 항이 하나 대응한다.

공리를 넣은 값은 등식 타입의 항이 여럿이 된다는 것이다. 두 원소 타입 $\mathbf 2$ 에서 $\mathbf 2\simeq\mathbf 2$ 의 항은 항등사상과 두 원소를 맞바꾸는 사상 둘이므로, $\mathbf 2=\mathbf 2$ 의 항도 둘이다. 등식의 증명이 하나뿐이라는 성질은 더 이상 쓸 수 없다.

항이 여럿인 등식을 경로로 읽으면 위상공간의 셈과 같아진다. $a=\_A b$ 의 항이 경로이고, 두 경로 $p,q$ 사이의 등식 $p=q$ 의 항은 경로를 경로로 옮기는 [호모토피](fundamental-group.md)다. 이 탑은 끝나지 않고, 한 타입은 점과 경로와 고차 호모토피를 모두 갖춘 대상이 된다.

# 정의

## 등식 타입

타입 $A$ 와 그 항 $a,b$ 에 대해 등식 타입 $a=\_A b$ 를 둔다. 항을 짓는 규칙은 반사성 하나다.

$$
\mathrm{refl}\_a\colon a=\_A a
$$

등식 타입을 쓰는 규칙은 경로 유도(J 규칙)다. $a$ 를 고정하고 $x\colon A$ 와 $p\colon a=\_A x$ 에 의존하는 타입족 $C(x,p)$ 에 대해, $C(a,\mathrm{refl}\_a)$ 의 항 하나를 주면 모든 $x,p$ 에서 $C(x,p)$ 의 항이 나온다.

$$
\frac{c\colon C(a,\mathrm{refl}\_a)}{\mathrm{J}(c)\colon \prod\_{x\colon A}\prod\_{p\colon a=\_A x}C(x,p)}
$$

## 동치

함수 $f\colon A\to B$ 가 동치라는 것은 모든 $b\colon B$ 에서 섬유 $\sum\_{a\colon A}(f(a)=\_B b)$ 가 수축 가능하다는 뜻이다. 수축 가능은 항 하나와 모든 항이 그것과 같다는 증명을 함께 갖춘 것을 말한다.

$$
\mathrm{isequiv}(f)\equiv\prod\_{b\colon B}\mathrm{isContr}\Bigl(\sum\_{a\colon A}f(a)=\_B b\Bigr),
\qquad
A\simeq B\equiv\sum\_{f\colon A\to B}\mathrm{isequiv}(f)
$$

## 일가성 공리

$\mathrm{refl}$ 에 경로 유도를 적용하면 사상 $\mathrm{idtoeqv}\colon (A=\_{\mathcal U}B)\to(A\simeq B)$ 를 얻는다. 여기서 $\mathcal U$ 는 타입들의 우주다. 일가성 공리는 이 사상이 동치라는 것이다.

$$
(A=\_{\mathcal U}B)\simeq(A\simeq B)
$$

## 타입의 층위

등식 타입이 수축 가능한 타입을 명제라 하고, 모든 등식 타입이 명제인 타입을 집합이라 한다. 이 정의를 반복하면 $n$ -타입의 층위가 나온다.

$$
\mathrm{isProp}(A)\equiv\prod\_{a,b\colon A}\mathrm{isContr}(a=\_A b),
\qquad
\mathrm{isSet}(A)\equiv\prod\_{a,b\colon A}\mathrm{isProp}(a=\_A b)
$$

# 성질

## 함수 외연성

**정리.** 일가성 공리에서 함수 외연성이 따라온다. 즉 $f,g\colon A\to B$ 가 모든 점에서 같으면 $f=g$ 다.

증명의 요지. 일가성으로 $\mathbf 2$ 의 두 항을 맞바꾸는 동치에서 등식을 얻고, 그 등식을 $A\to\mathbf 2$ 꼴 타입족에 옮겨 점마다의 등식을 함수 전체의 등식으로 올린다[^1].

## 등식 증명의 유일성과의 충돌

**정리.** 일가성 공리는 등식 증명의 유일성(uniqueness of identity proofs, UIP)과 양립하지 않는다.

$\mathbf 2=\_{\mathcal U}\mathbf 2$ 의 항이 둘이고 그 둘이 서로 다른 동치에서 왔으므로 등식 타입이 명제가 아니다. UIP 는 모든 타입을 집합으로 만들므로 두 진술이 함께 성립할 수 없다. 반사성만 쓰는 패턴 맞춤 규칙(공리 K)도 같은 이유로 쓸 수 없다.

## 모형

**정리.** 일가성 공리를 만족하는 모형이 존재한다.

단순집합의 Kan 복합체로 타입을 해석하면 등식 타입이 경로 공간이 되고 일가성이 성립한다[^2]. 타입을 집합으로 해석하는 표준 모형에서는 모든 등식 타입이 한 점이므로 일가성이 거짓이다. 두 모형이 함께 있으므로 일가성은 독립이다.

## 원의 기본군

**정리.** 고차 귀납 타입으로 정의한 원 $S^1$ 에 대해 $\pi_1(S^1)\cong\mathbb Z$ 다.

$S^1$ 은 점 $\mathrm{base}$ 와 경로 $\mathrm{loop}\colon \mathrm{base}=\mathrm{base}$ 로 생성한다. $\mathrm{base}$ 위의 섬유가 $\mathbb Z$ 이고 $\mathrm{loop}$ 를 따라 $n\mapsto n+1$ 로 도는 타입족을 일가성으로 짓고, 그 전체 공간이 수축 가능함을 보이면 등식 타입이 $\mathbb Z$ 와 동치다[^3]. 위상공간의 [기본군](fundamental-group.md) 계산에서 쓰는 덮개공간 논증을 타입 이론 안에서 그대로 수행한 것이다.

# 활용

- **구조의 불변성.** 동형인 두 구조는 일가성으로 같아지므로 한쪽에서 증명한 성질이 다른 쪽으로 그대로 옮겨 간다. 집합론 안에서 동형 사상을 따라 성질을 옮기는 작업을 생략한다.
- **증명 보조기.** Agda 와 Coq 의 일가성 라이브러리가 이 체계로 수학을 형식화한다. 군, 환, 위상공간의 정의를 동형까지만 지정하고도 등식을 쓸 수 있다.
- **합성 호모토피론.** [호모토피 군](homotopy-groups.md)의 계산을 공간 없이 타입 이론 안에서 한다. Freudenthal 매달기 정리와 $\pi\_{n}(S^n)\cong\mathbb Z$ 가 이 방식으로 증명되었다[^3].
- **계산 규칙으로서의 일가성.** 입방체 타입 이론은 구간 대상을 원시로 넣어 일가성을 공리가 아니라 계산되는 항으로 만든다. 공리로 둔 항은 계산 규칙이 없어 정규화를 막는다.

[^1]: The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, §4.9 — 일가성에서 함수 외연성을 끌어내는 논증. https://homotopytypetheory.org/book/
[^2]: C. Kapulkin, P. L. Lumsdaine, "The simplicial model of univalent foundations (after Voevodsky)", Journal of the European Mathematical Society 23 (2021) — 단순집합 Kan 복합체 모형에서 일가성의 성립. https://arxiv.org/abs/1211.2851
[^3]: D. R. Licata, M. Shulman, "Calculating the fundamental group of the circle in homotopy type theory", LICS 2013 — 부호화-복호화 논법으로 $\pi_1(S^1)\cong\mathbb Z$ 를 증명한다. https://arxiv.org/abs/1301.3443

# 연관 문서

## 선수지식

- [Curry–Howard 대응](curry-howard.md)

## 더 알아보기

아직 연결한 문서가 없다.

#foundations #logic #algebraic_topology #category_theory
